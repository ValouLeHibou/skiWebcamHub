stations = [
	[
        "Crans Montana - Les Violettes",
        "https://www.skaping.com/crans-montana/les-violettes"
    ],
	[
        "La Clusaz - Etale",
        "https://m.webcam-hd.com/la-clusaz/etale"
    ],
	[
        "La Clusaz - Col de Balme",
        "https://app.webcam-hd.com/la-clusaz/col-de-balme"
    ],
    [
        "La Plagne - Montchavin",
        "https://m.webcam-hd.com/webcam-station-la-plagne/montchavin"
    ],
	[
        "La Plagne - Roche de Mio",
        "https://m.webcam-hd.com/webcam-station-la-plagne/roche-de-mio"
    ],
	[
        "La Thuile - Les Suches",
        "https://webtv.feratel.com/webtv/?cam=6361&t=9&design=v3&c0=0&c2=1&lg=fr&s=0"
    ],
    [
        "Les Ménuires - Lac Croisette",
        "https://www.skaping.com/lesmenuires/croisette"
    ],
    [
        "Les Arcs - Aiguilles Rouge",
        "https://m.webcam-hd.com/lesarcs/aiguille-rouge"
    ],
    [
        "La Rosière",
        "https://m.webcam-hd.com/la-rosiere/mont-valaisan"
    ],
    [
        "L'Alpe d'Huez - Pic Blanc",
        "https://www.skaping.com/alpedhuez/pic-blanc"
    ],
    [
        "Montgenèvre - Front de Neige",
        "http://m.webcam-hd.com/montgenevre/front-de-neige"
    ],
    [
        "Montgenèvre - Eglise",
        "http://m.webcam-hd.com/montgenevre/eglise"
    ],
    [
        "Risoul - Front de Neige",
        "https://m.webcam-hd.com/risoul/risoul_front"
    ],
    [
			"Sainte Foy - Aiguille",
			"http://m.webcam-hd.com/ste-foy-tarentaise/sommet-aiguille"
    ],
    //[
    //    "Serre Chevalier - Cucumelle",
    //    "https://www.skiinfo.fr/alpes-du-sud/serre-chevalier/station-de-ski.html",
    //    "https://www.skiinfo.fr/alpes-du-sud/serre-chevalier/plans-des-pistes.html",
    //    "https://serrechevalier.roundshot.com/cucumell"
    //],
    [
        "Serre Chevalier - Col du Lautaret",
        "https://www.skaping.com/serrechevalier/coldulautaret"
    ],
    [
        "Serre Chevalier - Monetier Bachas",
        "https://www.skaping.com/serrechevalier/monetier"
    ],
    [
        "Superdevoluy",
        "https://m.webcam-hd.com/superdevoluy/village"
    ],
    [
        "Val d'Isère - Bellevarde",
        "https://www.valdisere.com/webcam/bellevarde/"
    ],
    [
        "Val Thorens - Stade",
        "https://www.skaping.com/valthorens/stade"
    ],
    [
        "Val Cenis - Pont Noir",
        "https://app.webcam-hd.com/valcenis/tk-pont-noir"
    ],
    //[
    //    "Tignes - Lac",
    //    "https://www.skiinfo.fr/alpes-du-nord/tignes/station-de-ski.html",
    //    "https://www.skiinfo.fr/alpes-du-nord/tignes/plans-des-pistes.html",
    //    "https://tignes.roundshot.com/lac/"
    //],
    [
        "Peisey Vallandry - Vanoise Express",
        "https://m.webcam-hd.com/lesarcs/vanoise-express"
    ],
];


// ##### BUTTON #####
document.getElementById("photo").onclick = function() {switchToPhoto()};
document.getElementById("fire").onclick = function() {switchToFire()};


function switchToFire() {
    console.log("switch to Fire");
    document.getElementById("webcam").src = "http://localhost/secretProject/php/fire.php"; // A MODIFIER EN LIGNE !!!!!!
    document.getElementById("button").style.background = "linear-gradient(45deg, #8B0000, #FF4500)";
    document.getElementById("add-options").style.display = "none";
}

function switchToPhoto() {
    console.log("switch to Photo");
    document.getElementById("webcam").src = "http://localhost/secretProject/php/photo.php";
    document.getElementById("button").style.background = "linear-gradient(45deg, #269831, #FFFF00)";
    document.getElementById("add-options").style.display = "none";
}


// ##### SwitchWebCam #####
let i = 0;
let station_nbr = stations.length;

function switchWebCam() {
    setTimeout(function () {
        let webcam_src = document.getElementById("webcam").src;
        if (webcam_src.search("fire.php") === -1 &&
            webcam_src.search("photo.php") === -1)
        {
            console.log(document.getElementById("webcam").src);
            document.getElementById("webcam").src = stations[i][1];
            console.log("switch to : ");
            console.log(stations[i][1]);
            if (i === station_nbr - 1) {
                i = 0
            } else {
                i++;
            }
        }
        switchWebCam();
    }, 180000) // toutes les 3min
}

// ##### SwitchWebCam by Hour

// 6h => 9h OR 19H => 21h WEBCAM
// 9H => 19h PHOTOS
// 21H => 6H FEU

function timeLoop() {
	webcamStartHour = 6;
	webcamEndHour = 11;
	webcamReStartHour = 17;
	webcamReEndHour = 21;
	photoStartHour = 11;
	photoEndHour = 17;
	fireStartHour = 21;
	fireEndHour = 23
    setTimeout(function () {
        let webcam_src = document.getElementById("webcam").src;
        let d = new Date();
        let hour = d.getHours();
        console.log(hour)
        if (hour == 0 || hour >= webcamStartHour && hour < webcamEndHour ||
        		hour >= webcamReStartHour && hour < webcamReEndHour) {
        	if (webcam_src.search("fire.php") !== -1 ||
            webcam_src.search("photo.php") !== -1) {
            	document.location.reload(true);
            }
        }
        if (hour >= photoStartHour && hour < photoEndHour && webcam_src.search("photo.php") === -1) {
            switchToPhoto();
        }
        if (hour >= fireStartHour && hour < fireEndHour && webcam_src.search("fire.php") === -1) {
            switchToFire();
        }
        timeLoop()
    }, 610000) // Toutes les heures
 }

// ##### Add Options to Select #####

function createOptions() {
    let select = document.getElementById('add-options');

    for (let x = 0; x < stations.length; x++){
        let opt = document.createElement('option');
        opt.value = stations[x][1];
        opt.innerHTML = stations[x][0];
        opt.classList.add("station");
        select.appendChild(opt);
    }
}

// ##### Switch WebCam onClick option #####
function switchOption(optionValue) {
    console.log("switch to :");
    console.log(optionValue);
    document.getElementById("webcam").src = optionValue;
}

function runAutoScroll() {
	setTimeout(function () {
		// Click on the center of the page to run the auto vertical scroll iframe
		let centerX = window.innerWidth / 2;
		let centerY = window.innerHeight / 2;
		console.log(document.elementFromPoint(centerX, centerY).click())
      document.elementFromPoint(centerX, centerY).click(function(){
      	console.log("TOTO");
     }); 
      console.log(centerX);
      console.log("TOTO");
		console.log(centerY);
		runAutoScroll()
	}, 5000) // Toutes les 3 minutes 10 secondes 
}

// ##### RUN #####

createOptions();
switchWebCam();
timeLoop();
//runAutoScroll();
