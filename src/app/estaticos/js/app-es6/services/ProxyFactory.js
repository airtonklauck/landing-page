class ProxyFactory {
	
	static create(obj, props, acao) {
		return new Proxy(obj, {
			set(target, prop, value, receiver) {

				let retorno = Reflect.set(target, prop, value, receiver);
				if(props.includes(prop)) acao(target);
                return retorno;
			},

			get(target, prop, receiver) {
				if(props.includes(prop)) acao();
				return Reflect.get(target, prop, receiver);
			}
		});
	}
}