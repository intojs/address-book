/**
 *	read-contact.conf.js
 */

import ReadContactCtrl from './read-contact.ctrl.js';
import readContactTpl from './read-contact.tpl.html!text';

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

var readContactConf = function($routeProvider) {
    $routeProvider.when('/read-contact/:id', {
        template: readContactTpl,
        controllerAs: 'ctrl',
        controller: ReadContactCtrl,
        resolve: {
        	contactResolve: contactResolve
        }
    });
};

readContactConf.$inject = ['$routeProvider'];

export default readContactConf;