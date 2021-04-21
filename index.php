<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Ski WebCam DataBase</title>
        <meta charset="UTF-8">
        <meta name="description" content="Ski WebCam Iframe">
        <meta name="author" content="Valentin GUILBAUD">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/index.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="icon" type="image/ico" href="webcam.ico" />
        <script type="text/javascript" src="./jquery-3.4.1.slim.min.js"></script>
    </head>
    <body>
        <iframe id="webcam"
                title="All WebCam"
                width="100%"
                height="100%"
                frameBorder="0"
                src="https://m.webcam-hd.com/lesarcs/vanoise-express">
        </iframe>

        <select id="add-options" onchange="switchOption(this.value)">
            <option selected disabled value="">SELECTIONNER UNE STATION</option>
            <!-- JS OPTION INSERT HERE -->
        </select>

        <!-- ##### MODE BUTTON ##### -->
        <div class="container">
            <div id="button">MODE</div>
            <div class="social twitter"><a href="./index.php"><i class="fa ICON_DE_SKI">ac_unit</i></a></div>
            <div class="social facebook"><i id="photo" class="fa ICON_DE_PHOTO"></i></div>
            <div class=" social google"><i id="fire" class="fa ICON_DE_FEU"></i></div>
            <!--<div class="social youtube"><i class="fa fa-youtube"></i></a></div>-->
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur"></feGaussianBlur>
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
                    <feBlend in="SourceGraphic" in2="goo"></feBlend>
                </filter>
            </defs>
        </svg>
    </body>

    <script src="js/iframe.js"></script>
    <script src="js/button.js"> </script>
</html>
