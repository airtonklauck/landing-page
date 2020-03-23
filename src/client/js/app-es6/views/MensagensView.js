class MensagensView extends View {

	template(model) {
		return model.texto ? `<p class="flash-message"><i class="fas fa-info-circle"></i> ${model.texto}</p>` : `<p></p>`;
	}
}