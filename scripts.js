/* Piedra, Papel o Tijeras Script */
function playGame(eleccionDelUsuario) {
    const elecciones = ['piedra', 'papel', 'tijeras'];
    const elegirImagenes = {
        'piedra': 'https://estaticos-cdn.prensaiberica.es/clip/1e300097-25f0-4c9f-87ea-33dcc4ed5797_16-9-discover-aspect-ratio_default_0.jpg',
        'papel': 'data:image/jpeg;base64,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',
        'tijeras': 'https://i.redd.it/need-help-making-huge-gwen-scissors-break-down-for-transport-v0-h9dbfp8y7mzd1.jpg?width=1170&format=pjpg&auto=webp&s=7f51581d0e8d73d6009ba708cb8d20895244b360'
    };
    const eleccionDeLaComputadora = elecciones[Math.floor(Math.random() * 3)];
    let resultado = '';

    if (eleccionDelUsuario === eleccionDeLaComputadora) {
        resultado = 'Es un empate.';
    } else if (
        (eleccionDelUsuario === 'piedra' && eleccionDeLaComputadora === 'tijeras') ||
        (eleccionDelUsuario === 'papel' && eleccionDeLaComputadora === 'piedra') ||
        (eleccionDelUsuario === 'tijeras' && eleccionDeLaComputadora === 'papel')
    ) {
        resultado = `<span class="win-message">¡Ganaste! ${eleccionDelUsuario} vence a ${eleccionDeLaComputadora}.</span>`;
    } else {
        resultado = `Perdiste, ${eleccionDeLaComputadora} vence a ${eleccionDelUsuario}.`;
    }

    document.getElementById('resultado').innerHTML = `
        <div>
            <span>Tu elección: </span><img src="${elegirImagenes[eleccionDelUsuario]}" alt="${eleccionDelUsuario}" class="result-img">
            <span>Computadora: </span><img src="${elegirImagenes[eleccionDeLaComputadora]}" alt="${eleccionDeLaComputadora}" class="result-img">
        </div>
        <div>${resultado}</div>
    `;
}

/* Quién quiere ser millonario Script */
const preguntas = [
    {
        question: "¿Cuál es la capital de Francia?",
        answers: ["París", "Londres", "Roma", "Berlín"],
        correct: 0
    },
    {
        question: "¿Cuál es la fórmula química del agua?",
        answers: ["H2O", "CO2", "NaCl", "O2"],
        correct: 0
    },
    {
        question: "¿En qué año llegó el hombre a la luna?",
        answers: ["1969", "1970", "1965", "1980"],
        correct: 0
    },
    {
        question: "¿Quién escribió 'Cien años de soledad'?",
        answers: ["Gabriel García Márquez", "Mario Vargas Llosa", "Julio Cortázar", "Pablo Neruda"],
        correct: 0
    },
    {
        question: "¿Cuál es el metal más caro del mundo?",
        answers: ["Rodio", "Oro", "Plata", "Platino"],
        correct: 0
    },
    {
        question: "¿Cuál es el país más grande del mundo?",
        answers: ["Rusia", "Canadá", "China", "Estados Unidos"],
        correct: 0
    },
    {
        question: "¿Cuál es el océano más grande del mundo?",
        answers: ["Pacífico", "Atlántico", "Índico", "Ártico"],
        correct: 0
    },
    {
        question: "¿Qué vitamina es producida cuando el cuerpo está expuesto al sol?",
        answers: ["Vitamina D", "Vitamina C", "Vitamina A", "Vitamina B12"],
        correct: 0
    },
    {
        question: "¿Qué país tiene la mayor población del mundo?",
        answers: ["China", "India", "Estados Unidos", "Indonesia"],
        correct: 0
    },
    {
        question: "¿Cuál es el río más largo del mundo?",
        answers: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"],
        correct: 0
    }
];

const dinero = [2000, 4000, 8000, 16000, 32000, 64000, 128000, 256000, 512000, 1024000];
let posicionDePregunta = 0;
let dineroAcomulado = 0;

function mezcla(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function cargarPregunta() {
    const contenedorDePregunta = document.getElementById('contenedor-pregunta');
    const informacionDePregunta = preguntas[posicionDePregunta];
    document.getElementById('dinero').innerText = `Dinero acumulado: $${dineroAcomulado}`;

    const respuestasMezcladas = mezcla([...informacionDePregunta.answers]);
    const indiceCorrecto = respuestasMezcladas.indexOf(informacionDePregunta.answers[informacionDePregunta.correct]);

    contenedorDePregunta.innerHTML = `
        <h2>${informacionDePregunta.question}</h2>
        ${respuestasMezcladas.map((answer, index) => `
            <button class="btn answer-btn" onclick="mirarRespuesta(${index}, ${indiceCorrecto})">${answer}</button>
        `).join('')}
    `;
}

function mirarRespuesta(selectedIndex, correctIndex) {
    if (selectedIndex === correctIndex) {
        dineroAcomulado += dinero[posicionDePregunta];
        alert("¡Correcto!");
        posicionDePregunta++;
        if (posicionDePregunta < preguntas.length) {
            cargarPregunta();
        } else {
            alert("¡Felicidades! Has completado el juego y has ganado $" + dineroAcomulado);
        }
    } else {
        alert("Incorrecto. La respuesta correcta era: " + preguntas[posicionDePregunta].answers[preguntas[posicionDePregunta].correct]);
        alert("Juego terminado. Has acumulado $" + dineroAcomulado);
        dineroAcomulado = 0;
        posicionDePregunta = 0;
        cargarPregunta();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('contenedor-pregunta')) {
        cargarPregunta();
    }
});