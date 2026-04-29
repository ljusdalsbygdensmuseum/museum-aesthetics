<?php
/*
 * Plugin Name:       Museum aesthetics
 * Description:       Want that museum feel? We got it!
 * Version:           0.1.0
 * Author:            Ina Eklund
 * Text Domain:       maes-domain
 * Domain Path:       /languages
*/
if (! defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}
class maes
{
    public function __construct()
    {
        //on init /post types /blocks 
        add_action('init', array($this, 'on_init'));

        //meta boxes
        add_filter('attachment_fields_to_edit', array($this, 'attachment_fields'), null, 2);

        //Save posts
        add_filter('attachment_fields_to_save', array($this, 'save_attachment_fields'), 10, 2);

        //enqueue
        add_action('admin_enqueue_scripts', array($this, 'admin_scripts'));

        //RestAPI
        add_action('rest_api_init', array($this, 'custom_rest'));

        //Sub page

        //on admin init /settings
    }
    function on_init()
    {
        // Languages
        load_plugin_textdomain('maes-domain', false, dirname(plugin_basename(__FILE__)) . '/languages');

        // Post types

        // Blocks
        register_block_type(__DIR__ . '/build/blocks/maes_collage_banner');
    }

    //Metaboxes
    function attachment_fields($form_fields, $post)
    {
        $top = get_post_meta($post->ID, 'maes_side_pref_top', true) == true ? 'checked' : '';
        $bottom = get_post_meta($post->ID, 'maes_side_pref_bottom', true) == true ? 'checked' : '';
        $left = get_post_meta($post->ID, 'maes_side_pref_left', true) == true ? 'checked' : '';
        $right = get_post_meta($post->ID, 'maes_side_pref_right', true) == true ? 'checked' : '';

        $form_fields['maes_side_pref'] = array(
            'label' => __('Side preference', 'maes-domain'),
            'input' => 'html',
            'html' => '
            <div 
                class="attachment_maes_side_pref_container"
            >
                <input type="checkbox" 
                    id="attachments[' . $post->ID . '][maes_side_pref_top]" 
                    name="attachments[' . $post->ID . '][maes_side_pref_top]" 
                    aria-label="image side preference top"
                    class="side-pref-top"
                    value="1"
                    ' . $top . '
                />
                <input type="checkbox" 
                    id="attachments[' . $post->ID . '][maes_side_pref_bottom]" 
                    name="attachments[' . $post->ID . '][maes_side_pref_bottom]"
                    aria-label="image side preference bottom"
                    class="side-pref-bottom"
                    value="1"
                    ' . $bottom . '
                />
                <input type="checkbox" 
                    id="attachments[' . $post->ID . '][maes_side_pref_left]" 
                    name="attachments[' . $post->ID . '][maes_side_pref_left]"
                    aria-label="image side preference left"
                    class="side-pref-left"
                    value="1"
                    ' . $left . '
                />
                <input type="checkbox" 
                    id="attachments[' . $post->ID . '][maes_side_pref_right]" 
                    name="attachments[' . $post->ID . '][maes_side_pref_right]" 
                    aria-label="image side preference right"
                    class="side-pref-right"
                    value="1"
                    ' . $right . '
                />
            <img 
                src="' . wp_get_attachment_image_url($post->ID, 'medium') . '" 
            >
            </div>
            ',
            'helps' => __('Chose which side(s) that should be shown more prominently in collage banner', 'maes-domain')
        );
        return $form_fields;
    }

    //Save posts
    function save_attachment_fields($post, $attachment)
    {
        //should there be current user can in attachment save
        /*if (! current_user_can('edit_post', $post->ID)) {
            return;
        }*/
        if (!($attachment['maes_side_pref_top']) && !($attachment['maes_side_pref_bottom']) && !($attachment['maes_side_pref_left']) && !($attachment['maes_side_pref_right'])) {
            return $post;
        }

        update_post_meta($post['ID'], 'maes_side_pref_top', $attachment['maes_side_pref_top'] ? true : false);
        update_post_meta($post['ID'], 'maes_side_pref_bottom', $attachment['maes_side_pref_bottom'] ? true : false);
        update_post_meta($post['ID'], 'maes_side_pref_left', $attachment['maes_side_pref_left'] ? true : false);
        update_post_meta($post['ID'], 'maes_side_pref_right', $attachment['maes_side_pref_right'] ? true : false);

        return $post;
    }

    //Enqueue
    function admin_scripts($hook)
    {
        //post editor and attachment scripts
        if ($hook != 'post.php' && $hook != 'post-new.php' && $hook != 'upload.php') {
            return;
        }
        //Grab dependencies
        $assets = include plugin_dir_path(__FILE__) . 'build/attachment_meta.asset.php';

        //Enqueue scripts
        wp_enqueue_script('maes-attachments', plugin_dir_url(__FILE__) . 'build/attachment_meta.js', $assets['dependencies'], $assets['version'], true);

        //Enqueue styles
        wp_enqueue_style('maes-attachments-style', plugin_dir_url(__FILE__) . 'build/attachment_meta.css');
    }

    //RestAPI
    function custom_rest()
    {
        register_rest_route('maes/v1', 'settings', array(
            'methods' => WP_REST_Server::READABLE,
            'callback' => array($this, 'rest_settings')
        ));

        register_rest_route('maes/v1', 'media/(?P<id>\d+)', array(
            'methods' => WP_REST_Server::READABLE,
            'callback' => array($this, 'media_rest')
        ));
    }
    function rest_settings()
    {
        return array(
            'site_title' => esc_html(get_bloginfo('name')),
            'site_url' => esc_url(get_bloginfo('url')),
            'slogan' => esc_html(get_bloginfo('description')),
            'logo' => esc_url(wp_get_attachment_url(get_theme_mod('custom_logo'))),
        );
    }
    function media_rest(WP_REST_Request $request)
    {
        $id = $request['id'];
        if (empty(get_post($id))) {
            return new WP_Error('post-not-found', 'Post not found');
        }
        return array(
            'side_pref' => array(
                'top' => (bool) get_post_meta($id, 'maes_side_pref_top', true),
                'bottom' => (bool) get_post_meta($id, 'maes_side_pref_bottom', true),
                'left' => (bool) get_post_meta($id, 'maes_side_pref_left', true),
                'right' => (bool) get_post_meta($id, 'maes_side_pref_right', true),
            )
        );
    }
    //Sub page

    //Settings

}


$maes = new maes();
