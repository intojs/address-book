class UpdateContactCtrl {
	constructor($location, $routeParams, $timeout, ContactsServ, SettingsServ, contactResolve) {
		
		this.$location = $location;
		this.$routeParams = $routeParams;
		this.$timeout = $timeout;
		
		this.ContactsServ = ContactsServ;
		this.SettingsServ = SettingsServ;

		this.contact = contactResolve;
	}

	readContacts() {
		this.$timeout(() => {
			this.$location.path('/');
		}, this.SettingsServ.clickDelay);
	}
	
	readContact() {
		this.$timeout(() => {
			this.$location.path('/read-contact/' + this.$routeParams.id);
		}, this.SettingsServ.clickDelay);
	}

	updateContact(firstName, lastName, email, address, city, zipCode, country) {
		this.ContactsServ.updateContact(this.$routeParams.id, firstName, lastName, email, address, city, zipCode, country);

		this.ContactsServ.justUpdated = true;

		this.$timeout(() => {
			this.$location.path('/read-contact/' + this.$routeParams.id);
		}, this.SettingsServ.clickDelay);
	}
}

UpdateContactCtrl.$inject = ['$location', '$routeParams', '$timeout', 'ContactsServ', 'SettingsServ', 'contactResolve'];

export default UpdateContactCtrl;