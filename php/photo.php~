<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Ski WebCam DataBase</title>
        <link rel="stylesheet" href="../css/index.css">
        <meta charset="UTF-8">
        <meta name="description" content="Ski WebCam Iframe">
        <meta name="author" content="Valentin GUILBAUD">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../css/photo.css">
    </head>
    <body>
    		<img id="arrowR" src="../arrow.jpg" alt="arrow" onclick="nextImg()">
    		<img id="arrowL" src="../arrow.jpg" alt="arrow" onclick="lastImg()">
        <?php
            // LISTAGE DU DOSSIER PHOTO
            $dir = '../photos';
            $files1 = scandir($dir);
        ?>
        <div class="frame">
	        <img id="diapo" src="../photos/index.jpg">
        <div>
    </body>
    <script type="text/javascript">
        // LISTE DES IMAGE DONNEES A JS
        let imgObj = <?php echo json_encode($files1); ?>;
        let i = 2;

        function diapo() {
            setTimeout(function () {
                document.getElementById("diapo").src = "../photos/" + imgObj[i];
                console.log("switch to : ");
                console.log(imgObj[i]);
                if (i === imgObj.length - 1) {
                    i = 2
                } else {
                    i++;
                }
                diapo();
            }, 10000)
        }
        
        function nextImg () {
        		if (i === imgObj.length - 1) {
            	i = 2
            } else {
            	i++;
            }
			document.getElementById("diapo").src = "../photos/" + imgObj[i];
         console.log("switch to : ");
         console.log(imgObj[i]);
        }
        
        function lastImg () {
        	if (i === 2) {
        		i = imgObj.length - 1
        	}
        	else {
        		i--;	
        	}
			document.getElementById("diapo").src = "../photos/" + imgObj[i];
         console.log("switch to : ");
         console.log(imgObj[i]);
        }

        diapo()
    </script>
</html>

