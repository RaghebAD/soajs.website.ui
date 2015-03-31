//...
"schema": {
	"commonFields": {
		//add firstName to commonFields
		"firstName": {
			"source": ['query.firstName'],
			"required": true,
			"default": "John",
			"validation": {
				"type": "string"
			}
		}
	},
	"/api_route1": {
			"commonFields": ['firstName'], //reference firstName from common fields
			"lastName" : { ... }
	},
	"/api_route2":{
			"commonFields": ['firstName'], //reference firstName from common fields
			"email" : { ... }
	}
}
//...