"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HttpService = function () {
	function HttpService() {
		_classCallCheck(this, HttpService);
	}

	_createClass(HttpService, [{
		key: "post",
		value: function post(dado, url) {

			return new Promise(function (resolve, reject) {

				var xhr = new XMLHttpRequest();

				xhr.open('POST', url, true);
				xhr.setRequestHeader("Content-type", "application/json");

				xhr.onreadystatechange = function () {
					if (xhr.readyState == 4) {
						if (xhr.status == 200) {
							resolve(xhr.responseText);
						} else {
							console.log(xhr.responseText);
							reject('Não foi possível conectar-se ao servidor.');
						}
					}
				};
				xhr.send(JSON.stringify(dado));
			});
		}
	}]);

	return HttpService;
}();
//# sourceMappingURL=HttpService.js.map