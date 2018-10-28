<?php
/**
 * Created by PhpStorm.
 * User: gadjet-service.com
 * Date: 28.10.2018
 * Time: 16:24
 */

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

//var_dump($_POST);

if ($_POST) {

    echo json_encode(array('succ'=>true));
}
exit();