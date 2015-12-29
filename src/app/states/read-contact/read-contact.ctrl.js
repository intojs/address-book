/**
 *	read-contact.ctrl.js
 */

import contactCreatedDialogTpl from './contact-created-dialog.tpl.html!text';
import contactUpdatedDialogTpl from './contact-updated-dialog.tpl.html!text';

class ReadContactCtrl {
	constructor($location, $mdDialog, $routeParams, $timeout, ContactsServ, SettingsServ, contactResolve) {
		
		this.$location = $location;
		this.$mdDialog = $mdDialog;
		this.$routeParams = $routeParams;
		this.$timeout = $timeout;

		this.ContactsServ = ContactsServ;
		this.SettingsServ = SettingsServ;

		this.contact = contactResolve;

		if (ContactsServ.justCreated || ContactsServ.justUpdated) {
			
			var dialogSettings = {
					parent: angular.element(document.body),
					clickOutsideToClose:true,
					fullscreen: true
				},
				dialogInstance;

			if (ContactsServ.justCreated) {

				ContactsServ.justCreated = false;
				
				dialogSettings.template = contactCreatedDialogTpl;
				dialogSettings.ariaLabel = 'Contact created';
			
			} else {
				
				ContactsServ.justUpdated = false;

				dialogSettings.template = contactUpdatedDialogTpl;
				dialogSettings.ariaLabel = 'Contact updated';
			}

			dialogInstance = $mdDialog.show(dialogSettings);

			$timeout(() => {
				$mdDialog.hide(dialogInstance);
			}, this.SettingsServ.autoCloseDialogDelay);
		}
	}

	readContacts() {
		this.$timeout(() => {
			this.$location.path('/');
		}, this.SettingsServ.clickDelay);
	}

	updateContact() {
		this.$timeout(() => {
			this.$location.path('/update-contact/' + this.$routeParams.id);
		}, this.SettingsServ.clickDelay);
	}

	deleteContact(e) {
		this.$timeout(() => {
			
			var confirm = this.$mdDialog.confirm()
				.title('Delete contact?')
				.content('This contact will be deleted.')
				.ariaLabel('Delete contact')
				.targetEvent(e)
				.ok('Yes')
				.cancel('No');
			
			this.$mdDialog.show(confirm).then(() => {
				this.ContactsServ.deleteContact(this.$routeParams.id);
				this.ContactsServ.justDeleted = true;
				this.$location.path('/');
			}, () => {});

		}, this.SettingsServ.clickDelay);
	}
}

ReadContactCtrl.$inject = ['$location', '$mdDialog', '$routeParams', '$timeout', 'ContactsServ', 'SettingsServ', 'contactResolve'];

export default ReadContactCtrl;