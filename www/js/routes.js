angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    .state('welcome', {
    url: '/index',
    templateUrl: 'templates/welcome.html',
    controller: 'welcomeCtrl',
	controllerAs: 'welcome'		
  })
  
  .state('registration', {
	abstract:true,
	url:'/register',
	templateUrl:'templates/register.html',
	controller:'registrationCtrl',
	controllerAs:'rc'
  })

  .state('registration.signUp1', {
    url: '/signup',
    templateUrl: 'templates/signUp1.html',
    controller: 'signUp1Ctrl',
	controllerAs: 'signupbasic'	
  })

  .state('registration.signUp2', {
    url: '/signup2',
    templateUrl: 'templates/signUp2.html',
    controller: 'signUp2Ctrl',
	controllerAs: 'signupdetail'	
  })

  .state('registration.userConfirmation', {
    url: '/userconfirmation',
    templateUrl: 'templates/userConfirmation.html',
    controller: 'userConfirmationCtrl',
	controllerAs: 'userconfirm'	
  })

  .state('home', {
	abstract: true,
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl',
	controllerAs: 'home'	
  })
  
  .state('home.activity', {
      url: '/activity',
      views: {
        'activity-tab': {
          templateUrl: 'templates/activity.html',
          controller: 'activityTabCtrl'
        }
      }
    })
	
	.state('home.listings', {
      url: '/listings',
      views: {
        'listings-tab': {
          templateUrl: 'templates/listings.html',
          controller: 'listingsTabCtrl',
		  controllerAs: 'list'	
        }
      }
    })
	
	.state('home.add', {
      url: '/add',
      views: {
        'add-tab': {
          templateUrl: 'templates/add.html',
          controller: 'addTabCtrl'
        }
      }
    })
	
	.state('home.settings', {
      url: '/settings',
      views: {
        'settings-tab': {
          templateUrl: 'templates/settings.html',
          controller: 'settingsTabCtrl'
        }
      }
    })
	
	.state('home.feedback', {
      url: '/feedback',
      views: {
        'feedback-tab': {
          templateUrl: 'templates/feedback.html',
          controller: 'feedbackTabCtrl'
        }
      }
    })

$urlRouterProvider.otherwise('/index');
  

});