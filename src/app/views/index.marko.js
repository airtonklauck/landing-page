// Compiled using marko@4.18.14 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/servidor$1.0.0/src/app/views/index.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"pt-br\"><head><meta charset=\"utf-8\"><title>Adir Klauck – Engenheiro Florestal</title><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"stylesheet\" href=\"/estatico/css/reset.css\"><link rel=\"stylesheet\" href=\"/estatico/css/site.css\"><link rel=\"stylesheet\" href=\"/estatico/css/loader.css\"><link href=\"https://fonts.googleapis.com/css?family=Roboto&amp;display=swap\" rel=\"stylesheet\"></head><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"container\"><header class=\"cabecalho\"><h1 class=\"cabecalho_titulo\">Adir Klauck – Engenheiro Florestal</h1></header><main><p>Está precisando serviços de levantamentos topográficos, georeferenciamento de imóveis rurais, cadastramento ambiental rural, membramento de imóvel rural?</p><p>Deixe seus dados no formulário abaixo que entraremos em contato.</p><div id=\"flash-messages\"></div><form class=\"formulario\" onsubmit=\"contatoController.enviar(event)\"><fieldset><legend class=\"formulario_titulo\">Informe seus dados para contato.</legend><label for=\"nome\">Nome:</label><input type=\"text\" name=\"nome\" id=\"nome\" required><label for=\"telefone\">Telefone:</label><input type=\"tel\" name=\"telefone\" id=\"telefone\" required></fieldset><button class=\"botao\" type=\"submit\">Enviar</button></form><p>Ou ainda se preferir, clique no ícone do Whatsapp no rodapé da página e converse conosco pelo chat.</p></main></div><a class=\"whatsapp\" href=\"#\">Whatsapp</a><script src=\"/estatico/js/app/helpers/Bind.js\"></script><script src=\"/estatico/js/app/services/HttpService.js\"></script><script src=\"/estatico/js/app/services/ContatoService.js\"></script><script src=\"/estatico/js/app/services/ProxyFactory.js\"></script><script src=\"/estatico/js/app/models/Contato.js\"></script><script src=\"/estatico/js/app/models/Mensagem.js\"></script><script src=\"/estatico/js/app/views/View.js\"></script><script src=\"/estatico/js/app/views/MensagensView.js\"></script><script src=\"/estatico/js/app/views/LoaderView.js\"></script><script src=\"/estatico/js/app/controllers/ContatoController.js\"></script><script>\r\n            let contatoController = new ContatoController();\r\n        </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "38");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/servidor$1.0.0/src/app/views/index.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
