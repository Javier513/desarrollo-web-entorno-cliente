// FUNCIONES PARA TRABAJAR CON COOKIES

const STORAGE_KEY = 'citasDavanteDent';

function saveCitas(citas) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(citas));
    console.log('Citas guardadas correctamente en LocalStorage:', citas);
}

function loadCitas() {
    const datos = localStorage.getItem(STORAGE_KEY);
    if (datos === null) {
        console.log('No hay citas guardadas aún');
        return [];
    }
    try {
        const citas = JSON.parse(datos);
        console.log('Citas cargadas correctamente:', citas);
        return citas;
    } catch (e) {
        console.error('Error al parsear citas guardadas', e);
        return [];
    }
}