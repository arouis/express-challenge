'use strict';

// For challenge 4.
// request documentation is available on https://github.com/request/request

var request = require('request');

request({ url: 'http://localhost:3000/bikes/new', method: 'PUT', json: {id: 5, name: "Aymen", price: "122", country: "TN"}},
  function (error, response, body) {
      if(response.statusCode == 201){
      console.log(body)
      } else {
        console.log('error: '+ response.statusCode)
      }
    }
  )
