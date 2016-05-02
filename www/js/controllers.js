angular.module('app.controllers', [])
  
.controller('welcomeCtrl', function($scope, $state) {

})
/*
This controller serves as the parent controller to the controllers
'signUp1Ctrl', 'signUp2Ctrl' and 'userConfirmationCtrl'. This also 
acts as an intermediate data store for the input field values of
the two registration screens so that the data is stored in a 
common parent controller and can be used for loading and storing
while navigating forward and backward through the screens.
*/
.controller('registrationCtrl', function($scope, $state) {
	var vm = this;
	vm.formDetails = {
		'firstname': '',
		'lastname' : '',
		'mobileno' : '',
		'emailaddress' : '',
		'agency' : '',
		'state' : ''
	}
})
   
.controller('signUp1Ctrl', function($scope, $state) {
	var vm = this;
	vm.next = function() {
		if(this.firstForm.$valid) {
			$scope.rc.formDetails.firstname = vm.formDetails.firstname;
			$scope.rc.formDetails.lastname = vm.formDetails.lastname;
			$state.go('registration.signUp2');
		}
	}
	vm.formDetails = $scope.rc.formDetails;
})
   
.controller('signUp2Ctrl', function($scope, $state) {
	var vm = this;
	vm.submit = function() {
		if(this.secondForm.$valid) {
			$scope.rc.formDetails.mobileno = vm.formDetails.mobileno;
			$scope.rc.formDetails.emailaddress = vm.formDetails.emailaddress;
			$scope.rc.formDetails.agency = vm.formDetails.agency;
			$scope.rc.formDetails.state = vm.formDetails.state;
			$state.go('registration.userConfirmation');
		}
	}
	vm.checkIfSelected = function(val) {
		return vm.formDetails.state ===  val;
	}
	vm.formDetails = $scope.rc.formDetails;
})
/*
On user confirmation the data from the scope of the parent controller
is being stored in the local storage for being used in the home screen
*/   
.controller('userConfirmationCtrl', function($scope, $state) {
	var vm = this;
	vm.formDetails = $scope.rc.formDetails;
	vm.submit = function() {
		window.localStorage.setItem("userInfo", JSON.stringify(vm.formDetails));
		$state.go('home.listings');
	}
})
   
.controller('activityTabCtrl', function($scope) {

})

.controller('listingsTabCtrl', function($scope) {
	var vm = this;
	vm.userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
})

.controller('addTabCtrl', function($scope) {

})

.controller('settingsTabCtrl', function($scope) {

})

.controller('feedbackTabCtrl', function($scope) {

})

.controller('homeCtrl', function($scope) {

})
 