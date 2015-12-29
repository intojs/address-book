/**
 *  contacts.serv.js
 */

class ContactsServ {
	constructor($localStorage) {
       
        this.$localStorage = $localStorage;

        this.justCreated = false;
        this.justUpdated = false;
        this.justDeleted = false;
    }

    createContact(firstName, lastName, email, address, city, zipCode, country) {
        if (!firstName || typeof firstName !== 'string' || !lastName || typeof lastName !== 'string' || !email || typeof email !== 'string') throw new Error('contacts.serv.js > createContact() > firstName, lastName or email format error');

        if (!angular.isArray(this.$localStorage.contacts)) this.$localStorage.contacts = [];

        var id = new Date().valueOf(),
            contact = {
                'id': id,
                'firstName': firstName,
                'lastName': lastName,
                'name': firstName + ' ' + lastName,
                'email': email,
                'address': address || null,
                'city': city || null,
                'zipCode': zipCode || null,
                'country': country || null
            };

        this.$localStorage.contacts.push(contact);

        // Return the ID of the entity which was just created.
        return id;
    }

    readContacts() {
        return this.$localStorage.contacts || [];
    }

    readContact(id) {
        if (!id || typeof id !== 'string') throw new Error('contacts.serv.js > readContact() > id format error');
        
        if (!angular.isArray(this.$localStorage.contacts)) this.$localStorage.contacts = [];

        var contact;

        for (let i = 0, len = this.$localStorage.contacts.length; i < len; i++) {
            if (this.$localStorage.contacts[i].id === parseInt(id)) {
                contact = this.$localStorage.contacts[i];
                break;
            }
        }

        return contact || {};
    }

    updateContact(id, firstName, lastName, email, address, city, zipCode, country) {
        if (!id || typeof id !== 'string') throw new Error('contacts.serv.js > updateContact() > id format error');

        if (!firstName || typeof firstName !== 'string' || !lastName || typeof lastName !== 'string' || !email || typeof email !== 'string') throw new Error('contacts.serv.js > updateContact() > firstName, lastName or email format error');

        if (!angular.isArray(this.$localStorage.contacts)) this.$localStorage.contacts = [];

        address = address || null;
        city = city || null;
        zipCode = zipCode || null;
        country = country || null;

        var updated;

        for (let i = 0, len = this.$localStorage.contacts.length; i < len; i++) {
            if (this.$localStorage.contacts[i].id === parseInt(id)) {
                this.$localStorage.contacts[i].firstName = firstName;
                this.$localStorage.contacts[i].lastName = lastName;
                this.$localStorage.contacts[i].name = firstName + ' ' + lastName;
                this.$localStorage.contacts[i].email = email;
                this.$localStorage.contacts[i].address = address;
                this.$localStorage.contacts[i].city = city;
                this.$localStorage.contacts[i].zipCode = zipCode;
                this.$localStorage.contacts[i].country = country;
                updated = this.$localStorage.contacts[i];
                break;
            }
        }

        // Return the object with modified fields.
        return updated;
    }

    deleteContact(id) {
        if (!id || typeof id !== 'string') throw new Error('contacts.serv.js > deleteContact() > id format error');

        if (!angular.isArray(this.$localStorage.contacts)) this.$localStorage.contacts = [];

        var index,
            i,
            len,
            deletedItem;

        for (i = 0, len = this.$localStorage.contacts.length; i < len; i++) {
            if (this.$localStorage.contacts[i].id === parseInt(id)) {
                index = i;
                break;
            }
        }
        
        deletedItem = this.$localStorage.contacts.splice(index, 1);
        
       if (!deletedItem[0]) throw new Error('contacts.serv.js > deleteContact() > deletion of the object with the selected id did not work');
    }
}

ContactsServ.$inject = ['$localStorage'];

export default ContactsServ;