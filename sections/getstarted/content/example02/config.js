'use strict';

module.exports = {
	"serviceName": "example02",
	"errors": {},
	"schema": {
		"/buildName": {
			"firstName": {
				"source": ['query.firstName'],
				"required": true,
				"validation": {
					"type": "string"
				}
			},
			"lastName": {
				"source": ['query.lastName'],
				"required": true,
				"validation": {
					"type": "string"
				}
			}
		}
	}
};