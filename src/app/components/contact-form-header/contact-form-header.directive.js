/**
 *	contact-form-header.directive.js
 */

import ContactFormHeaderDirectiveCtrl from './contact-form-header.directive.ctrl.js';
import contactFormTpl from './contact-form-header.tpl.html!text';

 var contactForm = function() {
 	return {
 		restrict: 'E',
 		replace: true,
 		transclude: true,
 		template: contactFormTpl,
 		scope: {
 			headerTitle: '@headerTitle',
 			onBack: '&onBack'
 		},
 		controller: ContactFormHeaderDirectiveCtrl,
 		controllerAs: 'ctrl'
 	};
 };

 export default contactForm;