/**
 *	create-contacts.conf.js
 */

import CreateContactCtrl from './create-contact.ctrl.js';
import createContactTpl from './create-contact.tpl.html!text';

var CreateContactConf = function($routeProvider) {
    $routeProvider.when('/create-contact', {
        template: createContactTpl,
        controllerAs: 'ctrl',
        controller: CreateContactCtrl
    });
};

CreateContactConf.$inject = ['$routeProvider'];

export default CreateContactConf;