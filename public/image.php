<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

require 'vendor/autoload.php';

use Intervention\Image\ImageManagerStatic as Image;

Image::configure(array('driver' => 'imagick'));

$_POST = json_decode(file_get_contents('php://input'), true);
if ($_POST) {

    $dir_img = __DIR__ . '/img';
    $dir_res = __DIR__ . '/img/result/';

    $layer = $_POST['layer'];
    $layer1 = $_POST['layer1'];
    $layer2 = $_POST['layer2'];

    $name = str_replace('.png', '', $layer);

    if (file_exists($dir_img . $layer1)&&$layer1!=="") {
        $layer1_name = str_replace('.png', '', $layer1);
        $layer1_name = str_replace('/', '', $layer1_name);
        $name .= '' . $layer1_name;
    }

    if (file_exists($dir_img . $layer2)&&$layer2!=="") {
        $layer2_name = str_replace('.png', '', $layer2);
        $layer2_name = str_replace('/', '', $layer2_name);
        $name .= '__' . $layer2_name;
    }

    $name_img = $name . '.png';
    if (file_exists($dir_res . $name_img)) {
        echo json_encode(array('img' => '/img/result/' . $name_img));
    } else {

        $layer1_img =$dir_img. $layer1;
        $layer2_img =$dir_img. $layer2;

        $img = Image::make($dir_img . '/build/' . $layer);

        if (file_exists( $layer2_img)&&$layer2!=="") {
            $img->insert( $layer2_img);
        }

        if (file_exists( $layer1_img)&&$layer1!=="") {
            $img->insert($layer1_img);
        }


        $img->resize(1000, 562);

        $new_img = $dir_res . $name_img;

        $img->save($new_img);

        echo json_encode(array('img' => '/img/result/' . $name_img));

    }

}
exit();
