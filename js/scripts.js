
document.addEventListener('DOMContentLoaded', function () {
    // Obtén todos los botones OK
    const okButtons = document.querySelectorAll('.btn-stage');

    // Agrega un event listener a cada botón OK
    okButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Obtén el valor del atributo data-next-container
            const nextContainerId = button.getAttribute('data-next-container');
            
            // Oculta el contenedor actual
            button.closest('.question-container').classList.add('d-none');

            // Muestra el siguiente contenedor
            const nextContainer = document.getElementById(nextContainerId);
            if (nextContainer) {
                nextContainer.classList.remove('d-none');
            }
        });
    });
}); 

function redirectToPage(ruta) {
    window.location.href = ruta;
}