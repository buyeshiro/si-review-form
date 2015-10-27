var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http');

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});



app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
fs = require('fs');


//Import Main Review Body
app.post('/', function (req, res) {

	var review = req.body.data;
    
    var log_update = review + "\n"  ; 

    fs.appendFile('log_backup.txt', log_update, function (err) {
  				if (err) throw err;
  					console.log('Review Logged');
				});


    var review_trim_1 = review.replace('[','');
			var review_trim_2 = review_trim_1.replace(']',''); 
			var review_parsed = JSON.parse(review_trim_2);
			var product_name = review_parsed.product_name; 
			var reward_email = review_parsed.reward_email; 
			var email_url = '/email?email=' + reward_email + '&product_name=' + product_name; 
			var email_url_encoded = encodeURI(email_url); 


   http.get({
  			  hostname: 'localhost',
			  port: 3000,
			  path: email_url_encoded,
			  agent: false  // create a new agent just for this one request
			}, function (res_email) {
			  console.log("Got response: " + res_email.statusCode);
			}).on('error', function(e) {
			  console.log("Got error: " + e.message);
			});







/*	fs.readFile('token.txt','utf8',function (err, data) {
	  if (err) {return console.log(err);}
		  var headers = {
		  'Content-Type': 'application/json',
		  'Token' : data
			};

		var options = {
		  host: 'platform-api.findthebest.com',
		  port: 80,
		  path: '/API/v1/app/6967/import',
		  method: 'POST',
		  headers: headers
		};

		// Setup the request.  The options parameter is
		// the object we defined above.
		var req2 = http.request(options, function(res2) {
		  res2.setEncoding('utf-8');

		  var responseString = '';

		  res2.on('data', function(data) {
			responseString += data;
		  });

		  res2.on('end', function() {
			// var resultObject = JSON.parse(responseString);
			var resultObject = JSON.stringify(responseString);
			var resultObjectParsed = JSON.parse(responseString);
			var review_status = JSON.stringify(resultObjectParsed) 
			var timestamp = new Date(); 
			var log_update = "\n\n" + timestamp + "\n" + review_status + "\n" + review ; 
			var review_trim_1 = review.replace('[','');
			var review_trim_2 = review_trim_1.replace(']',''); 
			var review_parsed = JSON.parse(review_trim_2);
			var product_name = review_parsed.product_name; 
			var reward_email = review_parsed.reward_email; 
			var email_url = '/email?email=' + reward_email + '&product_name=' + product_name; 
			var email_url_encoded = encodeURI(email_url); 
			console.log(reward_email);
			console.log(product_name);
			console.log(email_url_encoded);
			console.log(review);

 			http.get({
  			  hostname: 'localhost',
			  port: 3000,
			  path: email_url_encoded,
			  agent: false  // create a new agent just for this one request
			}, function (res_email) {
			  console.log("Got response: " + res_email.statusCode);
			}).on('error', function(e) {
			  console.log("Got error: " + e.message);
			});







			console.log(resultObject);
			fs.appendFile('log.txt', log_update, function (err) {
  				if (err) throw err;
  					console.log('Review Logged');
				});
			

			if( resultObject.indexOf('error') >= 0){
				console.log('Fuckin Up'); 
				res.sendStatus(400);
			 	console.log(resultObjectParsed);
			 

			} else {
				console.log(resultObjectParsed);
				console.log('Good Job');
				res.sendStatus(200);
			
			 }

			//res.sendStatus(200);
			//req.end();
			//res.write(responseString.statusCode());
			//console.log(responseString.statusCode());
		  });
		});

		req2.on('error', function(e) {
		  console.log(e.message);
		 

		  res.sendStatus(400);
		});

		req2.write(review);
		req2.end();
	
	});
	
*/	
	
});






//Import Product Feature Ratings 
app.post('/feature-import', function (req_feature, res_feature) {

	var features_data = req_feature.body.data;
    var log_update = features_data + "\n" ; 
			fs.appendFile('log_features_backup.txt', log_update, function (err) {
  				if (err) throw err;
  					console.log('Review Features Logged');
				});



	
/*
	var feature_headers = {
		  'Content-Type': 'application/json',
		  'Token' : '39fba08e59af49a18a98dfea15ec2b3c'
			};

		var feature_options = {
		  host: 'platform-api.findthebest.com',
		  port: 80,
		  path: '/API/v1/app/7493/import',
		  method: 'POST',
		  headers: feature_headers
		};

		// Setup the request.  The options parameter is
		// the object we defined above.
		var req_feature2 = http.request(feature_options, function(res_feature2) {
		  res_feature2.setEncoding('utf-8');

		  var feature_responseString = '';

		  res_feature2.on('data', function(data) {
			feature_responseString += data;
		  });

		  res_feature2.on('end', function() {
			var resultObjectParsed = JSON.parse(feature_responseString);
			var review_status = JSON.stringify(resultObjectParsed) 
			var timestamp = new Date(); 
			var log_update = "\n\n" + timestamp + "\n" + review_status + "\n" + features_data ; 
			fs.appendFile('log_features.txt', log_update, function (err) {
  				if (err) throw err;
  					console.log('Review Features Logged');
				});
			

			


		  });
		});

		req_feature2.on('error', function(e) {
		  console.log(e.message);
		  res_feature.sendStatus(400);
		});

		req_feature2.write(features_data);
		req_feature2.end();

		*/
	
	});
	
	




// Import Reviewer into SI Users Topic
app.post('/user-import', function (req_user, res_user) {

	var user_data = req_user.body.data;

	var log_update =  user_data + "\n" ; 
			fs.appendFile('log_users_backup.txt', log_update, function (err) {
  				if (err) throw err;
  					console.log('User Logged');
				});
			

	/* var user_headers = {
		  'Content-Type': 'application/json',
		  'Token' : 'temp_10290d5695b9e4d4b1618bcc7ebe90f4'
			};

		var user_options = {
		  host: 'platform-api.findthebest.com',
		  port: 80,
		  path: 'API/v1/app/7674/import',
		  method: 'POST',
		  headers: user_headers
		};

		// Setup the request.  The options parameter is
		// the object we defined above.
		var req_user2 = http.request(user_options, function(res_user2) {
		  res_user2.setEncoding('utf-8');

		  var user_responseString = '';

		  res_user2.on('data', function(data) {
			user_responseString += data;
		  });

		  res_user2.on('end', function() {
		  	console.log(user_responseString); 
			//var resultObjectParsed = JSON.parse(user_responseString);
			//var review_status = JSON.stringify(resultObjectParsed) 
			//var timestamp = new Date(); 
			var log_update = "\n\n" + timestamp + "\n" + review_status + "\n" + user_data ; 
			fs.appendFile('log_users.txt', log_update, function (err) {
  				if (err) throw err;
  					console.log('User Logged');
				});
             
			


		  });
		});

		req_user2.on('error', function(e) {
		  console.log(e.message);
		  res_user.sendStatus(400);
		});

		req_user2.write(user_data);
		req_user2.end();

		*/
	
	});







app.get('/file/:name', function (req, res, next) {

  var options = {
    root: __dirname + '/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  var fileName = req.params.name;
  var password = req.param('password');
  console.log(password); 

if ( password == 'findthebest!') {

res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });




} else {
	res.sendStatus("Unauthorized"); 
} 
  	 
 

});

















	












var server = app.listen(80, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});