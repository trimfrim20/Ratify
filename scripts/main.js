// function showTweets(tweets) {
//   console.log(tweets);
// }
// function getTweets() {
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET","https://api.twitter.com/1.1/search/tweets.json?q=%40twitterapi",true);
//   xhr.withCredentials = false;
//   xhr.send();
//   return xhr;
// }
// function postCredentials(encodedKey) {
// 	var xhr = new XMLHttpRequest();
// 	xhr.open("POST", "https://api.twitter.com/oauth2/token", true);
// 	xhr.setRequestHeader("Authorization", encodedKey);
// 	// xhr.setRequestHeader("Access-Control-Allow-Origin", "http://localhost");
// 	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
// 	xhr.send("grant_type=client_credentials");
// 	return xhr;
// 	//command for chrome --disable-web-security
// }
// $(document).ready(function(){
// 	var response;
// 	var consumerKey = "uGhhvUwApHjsldOs8qyx5IViz";
// 	var consumerSecret = "dnjB0iADWoid81m45mlfwAqejPJ8YMS0k0x89RNb5clZXNc6EA";
// 	var encoded = window.btoa(consumerKey + ":" + consumerSecret);
// 	console.log(encoded);
// 	response = postCredentials(encoded);
// 	console.log(response);
// 	response.onreadystatechange = function() {
//         if (response.readyState < 4) {
//           return
//         }
//         console.log(response.status)
//         if (response.status === 200) {
//         	showTweets(JSON.parse(response.responseText));
//         } 
//     }
// })
function setArrowHeight(){
	var logo_height = $(".banner-logo").height();
	console.log("height: " + logo_height)
	$("#arrow").css("height", (logo_height * 1.05));
}

function setSearchBoxHeight(){
	var logo_height = $(".banner-logo").height();
	$("#search-form-tx").css("top", ($(window).height() / 4));
}

$(window).load(function(){
	$(".loading-gif").css("display", "none");
	$("#content").show();
	setArrowHeight();
	$("#arrow").slideToggle("slow");
	setSearchBoxHeight();
	$(".form-container").delay(6900).fadeIn();
	$("#search-form-tx").focus();
})

$(window).on("resize", function() {
	setArrowHeight();
})

$(".menu-icon").on("click", function(event){
	if (event.target = $(".menu-icon")) {
		if ( $(".menu-wrapper").css("display") == "none"  ) {
			$("#slide-menu").toggle( "slide" );
			$(".menu-wrapper").show();
			$(".menu-bground").fadeIn();
		}
	}
})

$(".menu-wrapper").on("click", function(event){
	if ($(event.target).is(".menu-bground")){
		if ( $(".menu-wrapper").css("display") !== "none"  ) {
			$("#slide-menu").toggle( "slide" );
			$(".menu-bground").fadeOut();
			$(".menu-wrapper").css("display", "none");
		} 
	}
})
// $("#search-form-tx").on("click", function(event){
// 	if (event.target = $("#search-form-tx") && $("#arrow").css("display") != "none") {
// 			$("#arrow").slideToggle("slow");
// 			$(".banner-container").slideToggle("slow");	
// 	}
// })