

function recomendar() {

    const seleccionados = document.querySelectorAll("input[type=checkbox]:checked");

    let gustos = [];

    seleccionados.forEach(g => {
        gustos.push(g.value);
    });

    let recomendaciones = [];

    peliculas.forEach(pelicula => {

        let puntaje = 0;

        pelicula.generos.forEach(g => {

            if (gustos.includes(g)) {
                puntaje++;
            }

        });

        if (puntaje > 0) {

            recomendaciones.push({
                titulo: pelicula.titulo,
                puntaje: puntaje
            });

        }

    });

    recomendaciones.sort((a, b) => b.puntaje - a.puntaje);

    mostrarResultados(recomendaciones);

}

function mostrarResultados(lista) {

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    if (lista.length === 0) {

        resultado.innerHTML = "<li>No hay recomendaciones</li>";
        return;

    }

    lista.forEach(p => {

        let li = document.createElement("li");

        li.textContent = p.titulo + " ⭐ Coincidencias: " + p.puntaje;

        resultado.appendChild(li);

    });

}