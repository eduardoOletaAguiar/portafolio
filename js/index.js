const selector = document.getElementById('selectorIdioma');
const secciones = document.querySelectorAll('.lang');

function mostrarIdioma(idioma) {
  secciones.forEach(el => {
    el.style.display = el.dataset.lang === idioma ? '' : 'none';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  mostrarIdioma(selector.value);
});

selector.addEventListener('change', () => {
  mostrarIdioma(selector.value);
});

