'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContatoController = function () {
	function ContatoController() {
		_classCallCheck(this, ContatoController);

		var $ = document.querySelector.bind(document);
		this._inputNome = $('#nome');
		this._inputTelefone = $('#telefone');

		this._mensagem = new Bind(new Mensagem(), new MensagensView($('#flash-messages')), 'texto');

		this._contatoService = new Bind(new ContatoService(), new LoaderView($('#flash-messages')), 'enviar');
	}

	_createClass(ContatoController, [{
		key: 'enviar',
		value: function enviar(event) {
			var _this = this;

			event.preventDefault();

			this._contatoService.enviar(new Contato(this._inputNome.value, this._inputTelefone.value)).then(function (resultado) {
				_this._mensagem.texto = resultado;
				//if(resultado == 'Contato salvo com sucesso.') this._input.value = '';
			}).catch(function (erro) {
				_this._mensagem.texto = erro;
			});
		}
	}]);

	return ContatoController;
}();
//# sourceMappingURL=ContatoController.js.map