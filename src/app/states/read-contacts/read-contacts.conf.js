/**
 *	read-contacts.conf.js
 */

import ReadContactsCtrl from './read-contacts.ctrl.js';
import readContactsTpl from './read-contacts.tpl.html!text';

var readContactsConf = function($routeProvider) {
    $routeProvider.when('/', {
        template: readContactsTpl,
        controllerAs: 'ctrl',
        controller: ReadContactsCtrl
    });
};

readContactsConf.$inject = ['$routeProvider'];

export default readContactsConf;