import angular from 'angular';
import ContactsServ from './contacts.serv.js';
import SettingsServ from './settings.serv.js';

angular.module('services', [])
	.service('ContactsServ', ContactsServ)
	.service('SettingsServ', SettingsServ);

export default angular.module('services');