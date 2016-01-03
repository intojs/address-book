/**
 *	read-contact.conf.js
 */

import ReadContactCtrl from './read-contact.ctrl.js';
import readContactTpl from './read-contact.tpl.html!text';
import contactResolve from './read-contact.resolve.js';

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