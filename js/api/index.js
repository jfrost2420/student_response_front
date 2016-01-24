import Promise from 'promise';
import request from 'superagent';

export function fetchit(url, action, cb) {

	var promise = new Promise(function(resolve,reject) {
	    var xhr = new XMLHttpRequest();
	    xhr.onreadystatechange = function() {
	        if (xhr.readyState == XMLHttpRequest.DONE) {
	            console.log('change name',name);
	            //cb(JSON.parse(xhr.responseText));
	            resolve(JSON.parse(xhr.responseText));
	            //return dispatch(changeProjectName(JSON.parse(xhr.responseText).msg));
	            //alert(xhr.responseText);
	        }
	    }
	    xhr.open(action, url, true);
	    xhr.send(null);
	});

	return promise;

}

export function Test(id) {

	var promise = new Promise(function(resolve,reject) {
		request
			.get('http://localhost:5000/api')
			.set('x-access-token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmaXJzdF9uYW1lIjoiSm9obiIsImxhc3RfbmFtZSI6IkRvZSIsImVtYWlsIjoiam9obkBkb2UuY29tIiwiaWQiOjEyMywiaWF0IjoxNDUzNTk3MTc5LCJleHAiOjE0NTM2MTUxNzl9.-UCTb1aW7GGaQL-VwNIDnxIghLUmJnQReL1gbfgE_OY')
			.end(function(err,res) {
				console.log(err);
				console.log(res);

				if (err) {
					reject(err);
				}

				if (res) {
					resolve(res.body);
				}

			});
	});

	return promise;



}