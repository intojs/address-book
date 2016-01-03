/**
 *	read-contact.resolve.js
 */

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

export default contactResolve;