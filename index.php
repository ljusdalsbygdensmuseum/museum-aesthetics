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

        //Save posts

        //enqueue

        //RestAPI

        //Sub page

        //on admin init /settings
    }
    function on_init()
    {
        // Languages
        load_plugin_textdomain('maes-domain', false, dirname(plugin_basename(__FILE__)) . '/languages');

        // Post types

        // Blocks
        register_block_type(__DIR__ . '/build/blocks/maes_banner');
    }

    //Metaboxes

    //Save posts

    //Enqueue

    //RestAPI

    //Sub page

    //Settings

}


$maes = new maes();
