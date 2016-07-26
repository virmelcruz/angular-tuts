angular.module('firebase.config', [])
  .constant('FBURL', 'https://blinding-torch-2249.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','anonymous','facebook','google','twitter','github'])

  .constant('loginRedirectPath', '/login');
