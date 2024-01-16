const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
    };

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) =>  {
    if (numeroAdivinado == numeroSecreto) {
        console.log("Numero correcto!")
    } else if (numeroAdivinado < numeroSecreto) {
        console.log("Demasiado bajo")
    } else {
        console.log("Demasiado alto")
    }
    
};


module.exports = {
    generarNumeroAleatorio,
    verificarAdivinanza
}