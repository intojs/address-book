import CreateContactCtrl from './create-contact.ctrl.js';

describe('create-contact.ctrl.js', function () {

	var createContactCtrl,
		$location = {
			path: function () {}
		},
		$timeout = function (callback) {
			callback();
		},
		ContactsServ = {
			createContact: function () {
				return 10;
			}
		},
		SettingsServ = {
			clickDelay: 10
		};

	beforeEach(function() {
		createContactCtrl = new CreateContactCtrl($location, $timeout, ContactsServ, SettingsServ);
	});

	it('should have the proper injects', function() {
		expect(CreateContactCtrl.$inject).toEqual(['$location', '$timeout', 'ContactsServ', 'SettingsServ']);
	});

	it('should have dependencies defined', function() {

		expect(createContactCtrl.$location).toBeDefined();
		expect(createContactCtrl.$timeout).toBeDefined();
		expect(createContactCtrl.ContactsServ).toBeDefined();
		expect(createContactCtrl.SettingsServ).toBeDefined();
		expect(createContactCtrl.contact).toEqual({});
	});

	it('should have a readContacts method', function() {

		spyOn(createContactCtrl, '$timeout').and.callThrough();
		spyOn(createContactCtrl.$location, 'path');

		createContactCtrl.readContacts();

		expect(createContactCtrl.$timeout).toHaveBeenCalled();
		expect(createContactCtrl.$location.path).toHaveBeenCalledWith('/');
	});

	it('should have a create contact method', function() {

		spyOn(createContactCtrl, 'createContact').and.callThrough();
		spyOn(createContactCtrl, '$timeout').and.callThrough();
		spyOn(createContactCtrl.$location, 'path');

		ContactsServ.justCreated = false;

		createContactCtrl.createContact('Daniel', 'Dughila', 'danieldughila@gmail.com', 'Somewhere in Bucharest', 'Bucharest', '70703', 'Romania');
	
		expect(createContactCtrl.createContact).toHaveBeenCalledWith('Daniel', 'Dughila', 'danieldughila@gmail.com', 'Somewhere in Bucharest', 'Bucharest', '70703', 'Romania');
		expect(ContactsServ.justCreated).toEqual(true);
		expect(createContactCtrl.$timeout).toHaveBeenCalled();
		expect(createContactCtrl.$location.path).toHaveBeenCalledWith('/read-contact/10');
	});
});