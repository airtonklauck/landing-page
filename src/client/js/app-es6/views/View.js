class View {
	
	constructor(domElement) {
		this._domElement = domElement;
	}

	template() {
		throw new Error('O método template deve ser implementado');
	}

	update(model) {
		this._domElement.innerHTML = this.template(model);
	}
}