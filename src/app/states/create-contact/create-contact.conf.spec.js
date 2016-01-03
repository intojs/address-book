/**
 *	create-contact.conf.spec.js
 */

import createContactConf from './create-contact.conf.js';

describe('create-contact.conf.js', function() {

	var $routeProvider = {
		when: function() {
		}
	};

	it('should have the proper injects', function() {
		expect(createContactConf.$inject).toEqual(['$routeProvider']);
	});

	it('should have a route setup', function() {

		spyOn($routeProvider, 'when');

		createContactConf($routeProvider);

		expect($routeProvider.when).toHaveBeenCalled();
	});
});