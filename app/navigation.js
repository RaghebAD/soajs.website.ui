"use strict";
var navigation = [
	{
		'id': 'home',
		'label': 'home',
		'title': 'SOAJS Dream Framework',
		'description': 'SOAJS is an open source dream framework that empowers building crazy fast the API-nization layer between the product frontend (UI/UX) and backend (business logic). soajs is an api management with service oriented architecture.',
		'keywords': '#soajs@soajsorg, soa, soajs, service oriented architecture, multitenant, multi-tenant, productization, software, linux, platform, node, mongo, framework, npm, javascript, angularjs, angular, js, nodejs, mongodb, haproxy, cloud architecture, software as a service, saas, user registration and access control urac, security, cloud awareness, cloud-awareness, self awareness, self-awareness, multi service, multiservice, multi-service, enterprise solution, API, API management, enterprise APIs, elastic search, elastic-search, elasticsearch',
		'url': '#/',
		'tplPath': 'sections/home/page.html',
		'scripts': ['sections/home/controller.js']
	},
	{
		'id': 'news',
		'label': 'News',
		'title': 'SOAJS | News',
		'url': '#/news',
		'tplPath': 'sections/news/page.html',
		'scripts': ['sections/news/controller.js']
	},
	{
		'id': 'contactUs',
		'label': 'contactUs',
		'title': 'SOAJS | Contact Us',
		'url': '#/contactUs',
		'tplPath': 'sections/contactus/page.html',
		'scripts': ['sections/contactus/controller.js']
	},
	{
		'id': 'getStarted',
		'label': 'getStarted',
		'title': 'SOAJS | Get Sarted',
		'url': '#/getStarted/:section?/:anchor?',
		'tplPath': 'sections/getstarted/page.html',
		'scripts': ['sections/getstarted/controller.js']
	},
	{
		'id': 'example01',
		'label': 'example01',
		'title': 'SOAJS | Get Sarted | Example 01',
		'url': '#/getStarted/example01/:anchor?'
	},
	{
		'id': 'example02',
		'label': 'example02',
		'title': 'SOAJS | Get Sarted | Example 02',
		'url': '#/getStarted/example02/:anchor?'
	},
	{
		'id': 'example03',
		'label': 'example03',
		'title': 'SOAJS | Get Sarted | Example 03',
		'url': '#/getStarted/example03/:anchor?'
	},
	{
		'id': 'example04',
		'label': 'example04',
		'title': 'SOAJS | Get Sarted | Example 04',
		'url': '#/getStarted/example04/:anchor?'
	},
	{
		'id': 'advanced',
		'label': 'TechOps/DevOps',
		'title': 'SOAJS | Get Sarted | DevOps & TechOps',
		'url': '#/getStarted/advanced/:anchor?'
	},
	{
		'id': 'features',
		'label': 'features',
		'title': 'SOAJS | Features',
		'url': '#/features/:anchor?',
		'tplPath': 'sections/features/page.html',
		'scripts': ['sections/features/controller.js']
	},
	{
		'id': 'documentation',
		'label': 'documentation',
		'title': 'SOAJS | Documentation',
		'url': '#/documentation/:section?/:subSection?/:anchor?',
		'tplPath': 'sections/documentation/page.html',
		'scripts': ['sections/documentation/controller.js']
	},
	{
		'id': 'service',
		'label': 'soajs service',
		'title': 'SOAJS | Documentation | Service',
		'url': '#/documentation/core/service'
	},
	{
		'id': 'request',
		'label': 'soajs request',
		'title': 'SOAJS | Documentation | Request',
		'url': '#/documentation/core/request'
	},
	{
		'id': 'imfv',
		'label': 'soajs imfv',
		'title': 'SOAJS | Documentation | IMFV',
		'url': '#/documentation/core/imfv'
	},
	{
		'id': 'registry',
		'label': 'soajs registry',
		'title': 'SOAJS | Documentation | Registry',

		'url': '#/documentation/core/registry'
	},
	{
		'id': 'key-security',
		'label': 'soajs key-security',
		'title': 'SOAJS | Documentation | Key Security',

		'url': '#/documentation/core/key-security'
	},
	{
		'id': 'acl',
		'label': 'soajs acl',
		'title': 'SOAJS | Documentation | Access Levels',

		'url': '#/documentation/core/acl'
	},
	{
		'id': 'overview',
		'label': 'soajs features overview',
		'title': 'SOAJS | Documentation | Features Overview',
		'url': '#/documentation/advanced/overview'
	},
	{
		'id': 'environment',
		'label': 'soajs environment',
		'title': 'SOAJS | Documentation | Multi Environment',
		'url': '#/documentation/advanced/environment'
	},
	{
		'id': 'multitenancy',
		'label': 'soajs multitenancy',
		'title': 'SOAJS | Documentation | Multitenancy',
		'url': '#/documentation/advanced/multitenancy'
	},
	{
		'id': 'productization',
		'label': 'soajs productization',
		'title': 'SOAJS | Documentation | Productization',
		'url': '#/documentation/advanced/productization'
	},
	{
		'id': 'controller',
		'label': 'soajs controller',
		'title': 'SOAJS | Documentation | Controller',
		'url': '#/documentation/services/controller'
	},
	{
		'id': 'urac',
		'label': 'soajs urac',
		'title': 'SOAJS | Documentation | Urac',
		'url': '#/documentation/services/urac'
	},
	{
		'id': 'oauth',
		'label': 'soajs oauth',
		'title': 'SOAJS | Documentation | oAuth',
		'url': '#/documentation/services/oauth'
	},
	{
		'id': 'dashboard-services',
		'label': 'soajs dashboard-services',
		'title': 'SOAJS | Documentation | Dashboard Services',
		'url': '#/documentation/ui/dashboard-services'
	},
	{
		'id': 'dashboard-setup',
		'label': 'soajs dashboard-setup',
		'title': 'SOAJS | Documentation | Dashboard Setup',
		'url': '#/documentation/ui/dashboard-setup'
	},
	{
		'id': 'overview',
		'label': 'soajs deployment overview',
		'title': 'SOAJS | Deployment | Architecture Overview',
		'url': '#/documentation/deployment/overview'
	},
	{
		'id': 'development',
		'label': 'soajs Development Environment',
		'title': 'SOAJS | Deployment | Development Environment',
		'url': '#/documentation/deployment/development'
	},
	{
		'id': 'cloud-awareness',
		'label': 'soajs cloud-awareness',
		'title': 'SOAJS | Deployment | Cloud Awareness',
		'url': '#/documentation/deployment/cloud-awareness'
	},
	{
		'id': 'docker-files',
		'label': 'soajs docker-files',
		'title': 'SOAJS | Deployment | Docker Files',
		'url': '#/documentation/deployment/docker-files'
	}
];

var whitelistedDomain = ['localhost'];