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
        $field = 'test';
        $form_fields['maes_side_pref'] = array(
            'label' => __('Side preference', 'maes-domain'),
            'input' => 'html',
            'html' => '<div></div><input type="text" value="' . $field . '" id="attachments-' . $post->ID . '-maes_side_pref" name="attachments[' . $post->ID . '][maes_side_pref]">',
            'value' => $field,
            'helps' => ''
        );
        return $form_fields;
    }

    //Save posts

    //Enqueue
    function admin_scripts($hook)
    {
        //post editor scripts
        if ($hook != 'post.php' && $hook != 'post-new.php' && $hook != 'upload.php') {
            return;
        }
        //Grab dependencies
        $assets = include plugin_dir_path(__FILE__) . 'build/attachment_meta.asset.php';

        //Enqueue scripts
        wp_enqueue_script('maes-attatchments', plugin_dir_url(__FILE__) . 'build/attachment_meta.js', $assets['dependencies'], $assets['version'], true);
    }

    //RestAPI
    function custom_rest()
    {

        register_rest_route('maes/v1', 'settings', array(
            'methods' => WP_REST_Server::READABLE,
            'callback' => array($this, 'rest_settings')
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

    //Sub page

    //Settings

}


$maes = new maes();
