/**
 *	app.js
 */

import angular from 'angular';
import 'angular-route';
import 'angular-sanitize';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';
import 'ngstorage';

import components from './components/components';
import services from './services/services';
import states from './states/states';

angular.module('app', [
	'ngRoute',
	'ngSanitize',
	'ngAnimate',
	'ngAria',
	'ngMessages',
	'ngMaterial',
	'ngStorage',
	components.name,
	services.name,
	states.name
]);

var mdConf = function($mdThemingProvider) {

	$mdThemingProvider.theme('default')
		.primaryPalette('yellow')
		.accentPalette('pink')
		.warnPalette('red')
		.backgroundPalette('grey'); 
};

mdConf.$inject = ['$mdThemingProvider'];

angular.module('app').config(mdConf);

angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
});