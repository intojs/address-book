/**
 *	read-contact.resolve.spec.js
 */

import readContactResolve from './read-contact.resolve.js';

describe('read-contact.resolve.js', function () {

	var $route,
		$location,
		ContactsServ;

	beforeEach(function() {
		$route = {
			current: {
				params: {
					id: 10
				}
			}
		},
		$location = {
			path: function() {}
		},
		ContactsServ = {
			readContact: function() {}
		};
	});

	it('should have the proper injects for angular', function() {
		expect(readContactResolve.$inject).toEqual(['$route', '$location', 'ContactsServ']);
	});

	it('should have a resolve which pulls contacts', function() {

		spyOn(ContactsServ, 'readContact').and.returnValue({
			firstName: 'Test',
			lastName: 'Test'
		});


		var contactResolve = readContactResolve($route, $location, ContactsServ);

		expect(ContactsServ.readContact).toHaveBeenCalledWith(10);

		expect(contactResolve).toEqual({
			firstName: 'Test',
			lastName: 'Test'
		});
	});

	it('should have a resolve which redirects to the proper page', function() {

		spyOn(ContactsServ, 'readContact').and.returnValue({});

		spyOn($location, 'path');

		readContactResolve($route, $location, ContactsServ);

		expect(ContactsServ.readContact).toHaveBeenCalledWith(10);

		expect($location.path).toHaveBeenCalledWith('/');
	});
});