class CreateContactCtrl {
	constructor($location, $timeout, ContactsServ, SettingsServ) {
		
		this.$location = $location;
		this.$timeout = $timeout;
		
		this.ContactsServ = ContactsServ;
		this.SettingsServ = SettingsServ;

		this.contact = {};
	}

	readContacts() {
		this.$timeout(() => {
			this.$location.path('/');
		}, this.SettingsServ.clickDelay);
	}

	createContact(firstName, lastName, email, address, city, zipCode, country) {			
		var newContactId = this.ContactsServ.createContact(firstName, lastName, email, address, city, zipCode, country);

		this.ContactsServ.justCreated = true;

		this.$timeout(() => {
			this.$location.path('/read-contact/' + newContactId);
		}, this.SettingsServ.clickDelay);
	}
}

CreateContactCtrl.$inject = ['$location', '$timeout', 'ContactsServ', 'SettingsServ'];

export default CreateContactCtrl;