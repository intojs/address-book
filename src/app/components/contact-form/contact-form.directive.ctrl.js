/**
 *	contact-form.directive.ctrl.js
 */

class ContactFormDirectiveCtrl {
	constructor($scope) {
		this.$scope = $scope;
		this.contact = $scope.$eval($scope.contactDetails) || {};
	}

	submit(form) {
		if (form.$valid) {
			this.$scope.onSubmit({
				firstName: form.firstName.$modelValue,
				lastName: form.lastName.$modelValue,
				email: form.email.$modelValue,
				address: form.address.$modelValue,
				city: form.city.$modelValue,
				zipCode: form.zipCode.$modelValue,
				country: form.country.$modelValue
			});
		}
	}
}

ContactFormDirectiveCtrl.$inject = ['$scope'];

export default ContactFormDirectiveCtrl;