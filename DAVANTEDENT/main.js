guardarBtn.addEventListener('click', () => {
    console.log('Botón Guardar pulsado');

    if (!validateForm()) {
        alert('Por favor, corrige los errores en el formulario');
        return;
    }

    const getValue = (id) => {
        const el = document.getElementById(id);
        return el ? el.value : '';
    };

    const getInt = (id) => {
        const el = document.getElementById(id);
        return el ? parseInt(el.value) || 0 : 0;
    };

    const id = getValue('citaID') || Date.now().toString();

    const cita = {
        id: id,
        dia: getInt('dia'),
        mes: getInt('mes'),
        anio: getInt('anio'),
        hora: getInt('hora'),
        minuto: getInt('minuto'),
        nombre: getValue('nombre'),
        apellidos: getValue('apellidos'),
        dni: getValue('dni'),
        email: getValue('email') || '',
        telefono: getValue('telefono'),
        fechaNacimiento: getValue('fechaNacimiento'),
        observaciones: getValue('observaciones')
    };

    let citas = loadCitas();
    const index = citas.findIndex(c => c.id === id);
    if (index !== -1) {
        citas[index] = cita;
    } else {
        citas.push(cita);
    }

    saveCitas(citas);
    renderTable();

    // FUNCIONES GLOBALES PARA LOS BOTONES DE LA TABLA
    window.editCita = function(id) {
    console.log('Editando cita con ID:', id);
    const citas = loadCitas();
    const cita = citas.find(c => c.id === id);
    if (cita) {
        // CARGAMOS LOS DATOS EN EL FORMULARIO
        document.getElementById('citaID').value = cita.id;
        document.getElementById('dia').value = cita.dia;
        document.getElementById('mes').value = cita.mes;
        document.getElementById('anio').value = cita.anio;
        document.getElementById('hora').value = cita.hora;
        document.getElementById('minuto').value = cita.minuto;
        document.getElementById('nombre').value = cita.nombre;
        document.getElementById('apellidos').value = cita.apellidos;
        document.getElementById('dni').value = cita.dni;
        document.getElementById('email').value = cita.email || '';
        document.getElementById('telefono').value = cita.telefono;
        document.getElementById('fechaNacimiento').value = cita.fechaNacimiento;
        document.getElementById('observaciones').value = cita.observaciones;
        }
    };

    window.deleteCita = function(id) {
        let citas = loadCitas();
        citas = citas.filter(c => c.id !== id);
        saveCitas(citas);
        renderTable();
    };

    alert('¡Cita guardada correctamente!');
    console.log('Cita guardada:', cita);
});

