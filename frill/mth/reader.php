<?php
    $fp = fopen('data/bh.json', 'r');
    $data = fread($fp);
    fclose($fp);
?>