// FB.ui({
      //   method: 'share',
      //   href: 'https://developers.facebook.com/docs/'
      // }, function (response) {});





      <fb:login-button scope="public_profile,email" onlogin="FB.getLoginStatus();">
      </fb:login-button>




// $(document).ready(function() {
//   $.ajaxSetup({ cache: true });
//   $.getScript('https://connect.facebook.net/en_US/sdk.js', function(){
//     FB.init({
//       appId: '168983963786587',
//       version: 'v3.0' // or v2.1, v2.2, v2.3, ...
//     });     
//     $('#loginbutton,#feedbutton').removeAttr('disabled');
//     FB.getLoginStatus(updateStatusCallback);
//   });
// });