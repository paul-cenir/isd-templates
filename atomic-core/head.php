<!DOCTYPE html>
<!--[if lt IE 7]>
<html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>
<html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>
<html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js"> <!--<![endif]-->
<head>
    <base href="../">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <link rel="stylesheet" type="text/css" href="atomic-core/libraries/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="atomic-core/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="//malihu.github.io/custom-scrollbar/jquery.mCustomScrollbar.min.css">
    <link rel="stylesheet" type="text/css" href="//resources.agentimage.com/libraries/css/slick.min.css?ver=5.7"/>
    <link rel="stylesheet" type="text/css" href="//resources.agentimage.com/fonts/agentimage.font.icons.css?ver=5.7"/>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="atomic-core/css/site.css">
    <?php
        $filename = '../atomic-head.php';
        if (file_exists($filename)) {
            include("../atomic-head.php");
        }
    ?>
    <?php
        $parse_uri = explode( 'wp-content', $_SERVER['SCRIPT_FILENAME'] );
        $file_name =  $parse_uri[0] . 'wp-load.php';
        if (file_exists($file_name)) {
        require_once( $parse_uri[0] . 'wp-load.php' );
        }
    ?>
</head>
