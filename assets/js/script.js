let estudiante__nombre = prompt("¿Nombre? (ENTER)", "Pedro");
let estudiante__apellido = prompt("¿Apellido?", "Donoso");
let grado = prompt(`¿Qué estás estudiando?`, `Python`);

let curso__1 = prompt("¿Asignatura 1?", "Ruby");
let curso__1__puntaje1 = prompt(`¿nota 1? de: ${curso__1}`, "4");
let curso__1__puntaje2 = prompt(`¿nota 2? de: ${curso__1}`, "4");
let curso__1__puntaje3 = prompt(`¿nota 3? de: ${curso__1}`, "4");
let curso__2 = prompt("¿Asignatura 2?", "GIT");
let curso__2__puntaje1 = prompt(`¿nota 1? de: ${curso__2}`, "4");
let curso__2__puntaje2 = prompt(`¿nota 2? de: ${curso__2}`, "4");
let curso__2__puntaje3 = prompt(`¿nota 3? de: ${curso__2}`, "4");
let curso__3 = prompt("¿Asignatura 3?", "Vue JS");
let curso__3__puntaje1 = prompt(`¿nota 1? de: ${curso__3}`, "4");
let curso__3__puntaje2 = prompt(`¿nota 2? de: ${curso__3}`, "4");
let aprobacion = prompt("Dime la nota mínima de aprobación", "4");

curso__1__puntaje1 = parseInt(curso__1__puntaje1);
curso__1__puntaje2 = parseInt(curso__1__puntaje2);
curso__1__puntaje3 = parseInt(curso__1__puntaje3);
curso__2__puntaje1 = parseInt(curso__2__puntaje1);
curso__2__puntaje2 = parseInt(curso__2__puntaje2);
curso__2__puntaje3 = parseInt(curso__2__puntaje3);
curso__3__puntaje1 = parseInt(curso__3__puntaje1);
curso__3__puntaje2 = parseInt(curso__3__puntaje2);

let curso_1_final =
  (curso__1__puntaje1 + curso__1__puntaje2 + curso__1__puntaje3) / 3;
curso_1_final = Math.round(curso_1_final * 10) / 10;

let curso_2_final =
  (curso__2__puntaje1 + curso__2__puntaje2 + curso__2__puntaje3) / 3;
curso_2_final = Math.round(curso_2_final * 10) / 10;

document.write(`
    <div class="col-12 col-md-6">
        <table class="table table-borderless">
            <tbody>
                <tr>
                    <th scope="row">Nombre: </th>
                    <td>${estudiante__nombre} ${estudiante__apellido}</td>
                </tr>
                <tr>
                    <th scope="row">Carrera: </th>
                    <td>${grado}</td>
                </tr>
            </body>
        </table>
    </div>
`);

document.write(`
    </header>
`);

document.write(`
    <div class="container-fluid">
        <table class="table">
            <thead>
                <tr class="table-dark">
                    <th scope="col">Asignatura</th>
                    <th scope="col">Primera nota</th>
                    <th scope="col">Segunda nota</th>
                    <th scope="col">Tercera nota</th>
                    <th scope="col">Promediado</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">${curso__1}</th>
                    <td>${curso__1__puntaje1}</td>
                    <td>${curso__1__puntaje2}</td>
                    <td>${curso__1__puntaje3}</td>
                    <td>${curso_1_final}</td>
                </tr>
                <tr>
                    <th scope="row">${curso__2}</th>
                    <td>${curso__2__puntaje1}</td>
                    <td>${curso__2__puntaje2}</td>
                    <td>${curso__2__puntaje3}</td>
                    <td>${curso_2_final}</td>
                </tr>
                <tr>
                    <th scope="row">${curso__3}</th>
                    <td>${curso__3__puntaje1}</td>
                    <td>${curso__3__puntaje2}</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
            </tbody>
        </table>
    </div>
`);

document.write('<div class="container">');

let requerido =
  aprobacion * 3 - curso__3__puntaje1 - curso__3__puntaje2;
if (requerido < 1) {
  requerido = 1;
}

document.write(
  `<p>Para aprobar la asignatura de ${curso__3} con nota mínima 4, tienes que sacarte un ${requerido} en la tercera nota.</p>`
);

document.write("</div>");
