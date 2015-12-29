/**
 *	read-contacts.ctrl.js
 */

import contactDeletedDialogTpl from './contact-deleted-dialog.tpl.html!text';

class ReadContactsCtrl {
	constructor($location, $mdDialog, $timeout, ContactsServ, SettingsServ) {
		
		this.$location = $location;
		this.$mdDialog = $mdDialog;
		this.$timeout = $timeout;

		this.SettingsServ = SettingsServ;

		this.filters = { contact: '' };
		
		this.contacts = ContactsServ.readContacts();

		if (this.contacts.length === 0) this.noContactData = true;
		
		if (ContactsServ.justDeleted) {

			ContactsServ.justDeleted = false;

			var dialogInstance = $mdDialog.show({
				template: contactDeletedDialogTpl,
				parent: angular.element(document.body),
				clickOutsideToClose:true
	    	});

			$timeout(() => {
				$mdDialog.hide(dialogInstance);
			}, this.SettingsServ.autoCloseDialogDelay);
		}
	}

	createContact() {
		this.$timeout(() => {
			this.$location.path('/create-contact');
		}, this.SettingsServ.clickDelay);
	}

	readContact(id) {
		this.$timeout(() => {
			this.$location.path('/read-contact'+'/'+id);
		}, this.SettingsServ.clickDelay);
	}
}

ReadContactsCtrl.$inject = ['$location', '$mdDialog', '$timeout', 'ContactsServ', 'SettingsServ'];

export default ReadContactsCtrl;