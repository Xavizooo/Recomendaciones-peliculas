

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

    let top5 = recomendaciones.slice(0, 5);

    mostrarResultados(top5);

}

function mostrarResultados(lista) {

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    if (lista.length === 0) {
        resultado.innerHTML = "<p>No hay recomendaciones</p>";
        return;
    }

    lista.forEach(p => {

        let tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        tarjeta.innerHTML = `
<h3>${p.titulo}</h3>
<p class="puntaje">Coincidencias: ${p.puntaje}</p>
`;

        resultado.appendChild(tarjeta);

    });

}