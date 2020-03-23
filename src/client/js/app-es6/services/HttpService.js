class HttpService {

	post(dado, url) {

		return new Promise((resolve, reject) =>{

			let xhr = new XMLHttpRequest();

			xhr.open('POST', url, true);
			xhr.setRequestHeader("Content-type", "application/json");

			xhr.onreadystatechange = () => {
				if(xhr.readyState == 4) {
					if(xhr.status == 200) {
						resolve(xhr.responseText);
					}
					else {
						console.log(xhr.responseText);
						reject('Não foi possível conectar-se ao servidor.');
					}
				}
			};
			xhr.send(JSON.stringify(dado));
		}); 
	}
}