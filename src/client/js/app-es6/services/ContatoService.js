class ContatoService {

	constructor() {
		this._http = new HttpService();
	}
	
	enviar(dado) {

		return new Promise((resolve, reject) => {

			this._http.post(dado, '/contatos/contato')
			.then(resolve)
			.catch(reject)
		});
	}
}