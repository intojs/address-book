/**
 *	read-contact.conf.spec.js
 */

import readContactConf from './read-contact.conf.js';

describe('read-contact.conf.js', function() {

	var $routeProvider = {
		when: function(route, settings) {
			this.route = route;
			this.settings = settings;
		}
	}

	it('should have the proper injects', function() {
		expect(readContactConf.$inject).toEqual(['$routeProvider']);
	});

	it('should have the correct settings for the routeProvider', function() {

		spyOn($routeProvider, 'when').and.callThrough();

		readContactConf($routeProvider);

		expect($routeProvider.when).toHaveBeenCalled();

		expect($routeProvider.route).toEqual('/read-contact/:id');

		expect($routeProvider.settings.template).toBeDefined();

		expect($routeProvider.settings.controllerAs).toEqual('ctrl');
		
		expect($routeProvider.settings.controller).toBeDefined();
		
		expect($routeProvider.settings.resolve.contactResolve).toBeDefined();
	});
});