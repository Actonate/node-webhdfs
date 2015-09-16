var q = require('q');
var webhdfs = require('./webhdfs.js');
var basicWebHDFSClient;

var WebHDFSClient = exports.WebHDFSClient = function (options) {
	basicWebHDFSClient = webhdfs.BasicWebHDFSClient(options);
};


WebHDFSClient.prototype.uploadFile = function (fileName, fileData) {
	var returnPromise = q.defer();
	basicWebHDFSClient.create(fileName, null, function (err) {
		if (!err) {
			returnPromise.reject(data);
			return returnPromise.promise;
		}

		basicWebHDFSClient.append(fileName, fileData, function (err) {
			if (err) {
				returnPromise.reject(err);
				return returnPromise.promise;
			}

			returnPromise.resolve(true);

		});

	});

	return returnPromise.promise;
};


WebHDFSClient.prototype.client = basicWebHDFSClient;