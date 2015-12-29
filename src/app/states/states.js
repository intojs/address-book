import angular from 'angular';
import createContactConf from './create-contact/create-contact.conf.js';
import readContactConf from './read-contact/read-contact.conf.js';
import readContactsConf from './read-contacts/read-contacts.conf.js';
import updateContactConf from './update-contact/update-contact.conf.js';

angular.module('states', [])
	.config(createContactConf)
	.config(readContactConf)
	.config(readContactsConf)
	.config(updateContactConf);

export default angular.module('states');