class cita {
    constructor (id, dia, mes, anio, hora, minuto, nombre, apellidos, dni, email, telefono, fechaNacimiento, observaciones) {
        this.id = id;
        this.dia = dia;
        this.mes = mes;
        this.anio = anio;
        this.hora = hora;
        this.minuto = minuto;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.email = email; 
        this.telefono = telefono;
        this.fechaNacimiento = fechaNacimiento;
        this.observaciones = observaciones;
    }
}

function renderTable() {
    const citas = loadCitas();
    console.log('Citas cargadas para renderizar:', citas); // Depuración

    const tbody = document.getElementById('citasBody');
    if (!tbody) {
        console.error('No se encuentra tbody con id="citasBody"');
        return;
    }

    tbody.innerHTML = ''; // Limpiamos la tabla

    if (citas.length === 0) {
        const tr = document.createElement('tr');
        tr.innerHTML = '<td colspan="9" style="text-align:center;">Dato vacío</td>';
        tbody.appendChild(tr);
        return;
    }

    // Si hay citas, creamos una fila por cada una
    citas.forEach((cita, index) => {
        const tr = document.createElement('tr'); // ¡Aquí creamos tr para cada fila!

    tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${cita.dia.toString().padStart(2, '0')}/${cita.mes.toString().padStart(2, '0')}/${cita.anio} ${cita.hora.toString().padStart(2, '0')}:${cita.minuto.toString().padStart(2, '0')}</td>
        <td>${cita.nombre}</td>
        <td>${cita.apellidos}</td>
        <td>${cita.dni}</td>
        <td>${cita.email || ''}</td> <!-- Si no tienes email, pon '' para que no salga undefined -->
        <td>${cita.telefono}</td>
        <td>${cita.fechaNacimiento}</td>
        <td>${cita.observaciones}</td>
        <td>
        <button onclick="editCita('${cita.id}')">Modificar</button>
        <button onclick="deleteCita('${cita.id}')">Eliminar</button>
        </td>
        `;

        tbody.appendChild(tr);
    });
}

function validateForm() {
    // VALORES OBLIGATORIOS
    const dia = parseInt(document.getElementById('dia').value) || 0;
    const mes = parseInt(document.getElementById('mes').value) || 0;
    const anio = parseInt(document.getElementById('anio').value) || 0;
    const hora = parseInt(document.getElementById('hora').value) || 0;
    const minuto = parseInt(document.getElementById('minuto').value) || 0;
    const nombre = document.getElementById('nombre').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const dni = document.getElementById('dni').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;

    // VALIDACIONES BASICAS
    if (dia < 1 || dia > 31 || mes < 1 || mes > 12 || anio < 2023) return false;
    if (hora < 0 || hora > 23 || minuto < 0 || minuto > 59) return false;
    if (nombre === '' || apellidos === '' || dni === '' || fechaNacimiento === '') return false;
    if (!/^\d{9}$/.test(telefono)) return false;

    return true; // TODO VALIDO
}