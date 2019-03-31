
## Available Scripts

After git cloing you have to open two terminal/cmd inside in folder, 

Second with:
### `npm install`

### `npm start`

Runs the api with psotman like following instructions:

1. GET - localhost:3000/customers 
2. POST - localhost:3000/customers with follwoing fromat:
   {
      "name": "Pankaj",
      "company_email": "test@test.com",
      "company_website": "http://test.com",
      "password": "CEO",
      "location": "test",
      "email_notification": true,
      "organization": [
      	{"name": "Location One Name",
      	 "location": "Location One"
      	},
      	{"name": "Location Two Name",
      	 "location": "Location Two"
      	},
      	{"name": "Location Three Name",
      	 "location": "Location Three"
      	}
      	]
}
3. DELETE - localhost:3000/customers will delete at a time

4. GET - localhost:3000/customers/customerID will show specifc customer with id
4. DELETE- localhost:3000/customers/customerID will delete specifc customer with id
