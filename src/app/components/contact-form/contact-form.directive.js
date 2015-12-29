/**
 *	contact-form.directive.js
 */

import ContactFormDirectiveCtrl from './contact-form.directive.ctrl.js';
import contactFormTpl from './contact-form.tpl.html!text';

 var contactForm = function() {
 	return {
 		restrict: 'E',
 		replace: true,
 		transclude: true,
 		template: contactFormTpl,
 		scope: {
 			onSubmit: '&onSubmit',
 			contactDetails: '@contactDetails'
 		},
 		controller: ContactFormDirectiveCtrl,
 		controllerAs: 'ctrl'
 	};
 };

 export default contactForm;