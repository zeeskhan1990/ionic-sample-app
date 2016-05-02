angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    .state('welcome', {
    url: '/index',
    templateUrl: 'templates/index.html',
    controller: 'welcomeCtrl',
	controllerAs: 'welcome'		
  })
  /*
  There are three steps in the registration process, and for each step
  there is a corresponding controller. There is also a parent abstract
  controller "registrationCtrl" from which all the three other states
  inherits.
  */
  .state('registration', {
	abstract:true,
	url:'/register',
	templateUrl:'templates/registration/register.html',
	controller:'registrationCtrl',
	controllerAs:'rc'
  })

  .state('registration.signUp1', {
    url: '/signup',
    templateUrl: 'templates/registration/signUp1.html',
    controller: 'signUp1Ctrl',
	controllerAs: 'signupbasic'	
  })

  .state('registration.signUp2', {
    url: '/signup2',
    templateUrl: 'templates/registration/signUp2.html',
    controller: 'signUp2Ctrl',
	controllerAs: 'signupdetail'	
  })

  .state('registration.userConfirmation', {
    url: '/userconfirmation',
    templateUrl: 'templates/registration/userConfirmation.html',
    controller: 'userConfirmationCtrl',
	controllerAs: 'userconfirm'	
  })
	
/*
  There are five tabs in the home screen, and for each tab
  there is a corresponding controller. There is also a parent abstract
  controller "homeCtrl" from which all the other five states
  inherits.
  */
  .state('home', {
	abstract: true,
    url: '/home',
    templateUrl: 'templates/home/tabs.html',
    controller: 'homeCtrl',
	controllerAs: 'home'	
  })
  
  .state('home.activity', {
      url: '/activity',
      views: {
        'activity-tab': {
          templateUrl: 'templates/home/activity.html',
          controller: 'activityTabCtrl'
        }
      }
    })
	
	.state('home.listings', {
      url: '/listings',
      views: {
        'listings-tab': {
          templateUrl: 'templates/home/listings.html',
          controller: 'listingsTabCtrl',
		  controllerAs: 'list'	
        }
      }
    })
	
	.state('home.add', {
      url: '/add',
      views: {
        'add-tab': {
          templateUrl: 'templates/home/add.html',
          controller: 'addTabCtrl'
        }
      }
    })
	
	.state('home.settings', {
      url: '/settings',
      views: {
        'settings-tab': {
          templateUrl: 'templates/home/settings.html',
          controller: 'settingsTabCtrl'
        }
      }
    })
	
	.state('home.feedback', {
      url: '/feedback',
      views: {
        'feedback-tab': {
          templateUrl: 'templates/home/feedback.html',
          controller: 'feedbackTabCtrl'
        }
      }
    })

$urlRouterProvider.otherwise('/index');
  

});