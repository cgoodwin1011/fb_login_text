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


<!-- <script>
(function (d, s, id) {
  console.log("hiyo hiyo")
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src =
    'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0&appId=168983963786587&autoLogAppEvents=1';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
</script> -->