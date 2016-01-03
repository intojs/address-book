/**
 *	create-contacts.conf.js
 */

import CreateContactCtrl from './create-contact.ctrl.js';
import createContactTpl from './create-contact.tpl.html!text';

var createContactConf = function($routeProvider) {
    $routeProvider.when('/create-contact', {
        template: createContactTpl,
        controllerAs: 'ctrl',
        controller: CreateContactCtrl
    });
};

createContactConf.$inject = ['$routeProvider'];

export default createContactConf;