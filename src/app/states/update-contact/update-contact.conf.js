/**
 *	update-contact.conf.js
 */

import UpdateContactCtrl from './update-contact.ctrl.js';
import updateContactTpl from './update-contact.tpl.html!text';

var contactResolve = function($route, $location, ContactsServ) {
	var contact = ContactsServ.readContact($route.current.params.id);
	if (Object.keys(contact).length === 0) {
		$location.path('/');
		return false;
	} else {
		return contact;
	}
};

contactResolve.$inject = ['$route', '$location', 'ContactsServ'];

var updateContactConf = function($routeProvider) {
    $routeProvider.when('/update-contact/:id', {
        template: updateContactTpl,
        controllerAs: 'ctrl',
        controller: UpdateContactCtrl,
        resolve: {
        	contactResolve: contactResolve
        }
    });
};

updateContactConf.$inject = ['$routeProvider'];

export default updateContactConf;