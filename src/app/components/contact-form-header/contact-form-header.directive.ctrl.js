/**
 *	contact-form-header.directive.ctrl.js
 */

class ContactFormHeaderDirectiveCtrl {
	constructor($scope) {
		this.$scope = $scope;
		this.headerTitle = $scope.$eval($scope.headerTitle);
	}

	goBack() {
		this.$scope.onBack();
	}
}

ContactFormHeaderDirectiveCtrl.$inject = ['$scope'];

export default ContactFormHeaderDirectiveCtrl;