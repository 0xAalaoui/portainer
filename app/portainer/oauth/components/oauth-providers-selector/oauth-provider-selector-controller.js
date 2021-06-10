angular.module('portainer.oauth').controller('OAuthProviderSelectorController', function OAuthProviderSelectorController() {
  var ctrl = this;

  this.providers = [
    {
      authUrl: 'https://login.microsoftonline.com/TENANT_ID/oauth2/authorize',
      accessTokenUrl: 'https://login.microsoftonline.com/TENANT_ID/oauth2/token',
      resourceUrl: 'https://graph.windows.net/TENANT_ID/me?api-version=2013-11-08',
      logoutUrl: `https://login.microsoftonline.com/common/oauth2/v2.0/logout?post_logout_redirect_uri=${window.location.origin}/#!/auth`,
      userIdentifier: 'userPrincipalName',
      scopes: 'id,email,name',
      name: 'microsoft',
      label: 'Microsoft',
      description: 'Microsoft OAuth provider',
      icon: 'fab fa-microsoft',
    },
    {
      authUrl: 'https://accounts.google.com/o/oauth2/auth',
      accessTokenUrl: 'https://accounts.google.com/o/oauth2/token',
      resourceUrl: 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json',
      logoutUrl: `https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=${window.location.origin}/#!/auth`,
      userIdentifier: 'email',
      scopes: 'profile email',
      name: 'google',
      label: 'Google',
      description: 'Google OAuth provider',
      icon: 'fab fa-google',
    },
    {
      authUrl: 'https://github.com/login/oauth/authorize',
      accessTokenUrl: 'https://github.com/login/oauth/access_token',
      resourceUrl: 'https://api.github.com/user',
      logoutUrl: `https://github.com/logout`,
      userIdentifier: 'login',
      scopes: 'id email name',
      name: 'github',
      label: 'Github',
      description: 'Github OAuth provider',
      icon: 'fab fa-github',
    },
    {
      authUrl: '',
      accessTokenUrl: '',
      resourceUrl: '',
      logoutUrl: '',
      userIdentifier: '',
      scopes: '',
      name: 'custom',
      label: 'Custom',
      description: 'Custom OAuth provider',
      icon: 'fa fa-user-check',
    },
  ];

  this.$onInit = onInit;

  function onInit() {
    if (ctrl.provider.authUrl) {
      ctrl.provider = getProviderByURL(ctrl.provider.authUrl);
    } else {
      ctrl.provider = ctrl.providers[0];
    }
    ctrl.onSelect(ctrl.provider, false);
  }

  function getProviderByURL(providerAuthURL) {
    if (providerAuthURL.indexOf('login.microsoftonline.com') !== -1) {
      return ctrl.providers[0];
    } else if (providerAuthURL.indexOf('accounts.google.com') !== -1) {
      return ctrl.providers[1];
    } else if (providerAuthURL.indexOf('github.com') !== -1) {
      return ctrl.providers[2];
    }
    return ctrl.providers[3];
  }
});
