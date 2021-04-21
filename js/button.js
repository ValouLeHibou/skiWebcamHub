let twitter = $(".social.twitter");
let facebook = $(".social.facebook");
let google = $(".social.google");
$("#button").click(function(){
    twitter.removeClass("down");
    facebook.removeClass("down");
    google.removeClass("down");
    twitter.toggleClass("clicked"); // SkiWebCam
    facebook.toggleClass("clicked"); // Photo
    google.toggleClass("clicked"); // Fire
    //$(".social.youtube").toggleClass("clicked");
});
$(".social").click(function(){
    twitter.toggleClass("down"); // SkiWebCam
    facebook.toggleClass("down"); // Photo
    google.toggleClass("down"); // Fire
});
