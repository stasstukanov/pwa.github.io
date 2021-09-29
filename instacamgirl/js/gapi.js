var googleUser = {};
var startApp = function() {
  gapi.load('auth2', function(){
	// Retrieve the singleton for the GoogleAuth library and set up the client.
	auth2 = gapi.auth2.init({
	  client_id: '47868849702-406as93f0lnd1an30ub0jo2cnstm0lm2.apps.googleusercontent.com',
	  cookiepolicy: 'single_host_origin',
	  // Request scopes in addition to 'profile' and 'email'
	  //scope: 'additional_scope'
	});
	attachSignin(document.getElementById('googleLogin'));
  });
};

function attachSignin(element) {
  auth2.attachClickHandler(element, {},
	function(googleUser) {
	  var profile = googleUser.getBasicProfile();
	  console.log("ID: " + profile.getId()); // Don't send this directly to your server!
	  console.log('Full Name: ' + profile.getName());
	  console.log('Given Name: ' + profile.getGivenName());
	  console.log('Family Name: ' + profile.getFamilyName());
	  console.log("Image URL: " + profile.getImageUrl());
	  console.log("Email: " + profile.getEmail());
	  console.log("Token: " + googleUser.getAuthResponse().id_token());
	}, function(error) {
	  alert(JSON.stringify(error, undefined, 2));
	});
}