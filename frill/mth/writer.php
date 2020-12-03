

<?php


    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        $fp = fopen('../data/bh.json', 'w');
        fwrite($fp, $_POST['content']);
        fclose($fp);

        echo json_encode("task finished");

    }

?>