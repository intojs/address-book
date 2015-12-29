import angular from 'angular';
import contactForm from './contact-form/contact-form.directive.js';
import contactFormHeader from './contact-form-header/contact-form-header.directive.js';

angular.module('components', [])
	.directive('abContactForm', contactForm)
	.directive('abContactFormHeader', contactFormHeader);

export default angular.module('components');