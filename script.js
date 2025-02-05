var actual = new Date();

function mostrarCalendario(year, month) {
    var now = new Date(year, month - 1, 1);
    var last = new Date(year, month, 0);
    var primerDiaSemana = (now.getDay() == 0) ? 7 : now.getDay();
    var ultimoDiaMes = last.getDate();
    var dia = 0;
    var resultado = "<tr>";
    var diaActual = 0;
    var last_cell = primerDiaSemana + ultimoDiaMes;

    for (let i = 1; i <= 42; i++) {
        if (i == primerDiaSemana) {
            dia = 1;
        }
        if (i < primerDiaSemana || dia > ultimoDiaMes) {
            resultado += "<td>&nbsp;</td>";
        } else {
            if (dia == actual.getDate() && month == actual.getMonth() + 1 && year == actual.getFullYear()) {
                resultado += `<td class='hoy'>${dia}</td>`;
            } else {
                resultado += `<td>${dia}</td>`;
            }
            dia++;
        }
        if (i % 7 == 0) {
            resultado += "</tr>";
            if (dia > ultimoDiaMes) {
                break;
            }
            resultado += "<tr>";
        }
    }
    resultado += "</tr>";

    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    let nextMonth = month + 1;
    let nextYear = year;

    if (month + 1 > 12) {
        nextMonth = 1;
        nextYear = year + 1;
    }

    let prevMonth = month - 1;
    let prevYear = year;

    if (month - 1 < 1) {
        prevMonth = 12;
        prevYear = year - 1;
    }

    document.getElementById("calendar").getElementsByTagName("caption")[0].innerHTML = `
        <div>${meses[month - 1]} / ${year}</div>
        <div>
            <a onclick="mostrarCalendario(${prevYear}, ${prevMonth})">&lt;</a>
            <a onclick="mostrarCalendario(${nextYear}, ${nextMonth})">&gt;</a>
        </div>`;
    document.getElementById("calendar").getElementsByTagName("tbody")[0].innerHTML = resultado;
}

mostrarCalendario(actual.getFullYear(), actual.getMonth() + 1);
