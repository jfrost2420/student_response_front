import Promise from 'promise';

export default function fetchit(url, action, cb) {

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