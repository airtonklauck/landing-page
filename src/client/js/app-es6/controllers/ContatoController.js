class ContatoController {
	
	constructor() {
		let $ = document.querySelector.bind(document);
		this._inputNome = $('#nome');
		this._inputTelefone = $('#telefone');
		
		this._mensagem = new Bind(
			new Mensagem(),
			new MensagensView($('#flash-messages')),
			'texto'
		);

		this._contatoService = new Bind(
			new ContatoService(),
			new LoaderView($('#flash-messages')),
			'enviar'
		);
	}

	enviar(event) {
		event.preventDefault();

		this._contatoService.enviar(
			new Contato(
				this._inputNome.value,
				this._inputTelefone.value
			))
		.then(resultado => {
			this._mensagem.texto = resultado;
			//if(resultado == 'Contato salvo com sucesso.') this._input.value = '';
		})
		.catch(erro => {
			this._mensagem.texto = erro;
		})
	}
}