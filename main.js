function traducir() {
    const texto = document.getElementById('sourceText').value;
    const idioma = document.getElementById('languageSelect').value;
    let resultado = texto;

    switch (idioma) {
        case 'kircho':
            resultado = texto.replace(/[aeiouáéíóú]/gi, function(match) {
                return match === match.toLowerCase() ? 'i' : 'I';
            });
            break;
        case 'feminista':
            resultado = lenguajeInclusivo(texto);
            break;
        case 'zurdo':
            resultado = zurdoMode();
            break;
        default:
            resultado = texto;
    }

    document.getElementById('translatedText').value = resultado;
}

function lenguajeInclusivo(texto) {
    return texto.replace(/\b(\w*?)o\b/gi, function(match, p1) {
        return p1 + 'e';
    }).replace(/\b(\w*?)os\b/gi, function(match, p1) {
        return p1 + 'es';
    });
}

function zurdoMode() {
    return "exproiese, muerte al kapitalismo, la emision es buena, muere empresario cerdo microcapitalista cis, muchas más incongruencias, etc, etc, hay mucho olor a porro";
}

function leerTexto() {
    const texto = document.getElementById('translatedText').value;
    const utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'es-AR';
    speechSynthesis.speak(utterance);
}
