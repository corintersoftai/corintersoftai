document.addEventListener('DOMContentLoaded', function() {
    
    // Selección de todos los botones del acordeón
    const accHeaders = document.querySelectorAll('.accordion-header');

    accHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Alternar la clase activa en el botón clickeado
            this.classList.toggle('active');

            // Seleccionar el panel de contenido asociado
            const content = this.nextElementSibling;

            // Lógica para abrir/cerrar con animación de max-height
            if (content.style.maxHeight) {
                // Si ya tiene altura, lo cerramos
                content.style.maxHeight = null;
            } else {
                // Cerramos otros abiertos (opcional, estilo Netflix cierra los otros o los deja, 
                // Netflix permite múltiples abiertos, pero para limpieza cerramos los demás aquí si se quisiera.
                // Dejaremos múltiples abiertos para mejor UX en móvil).
                
                // Asignamos la altura del scroll para animar la apertura
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // Validar formulario (simple feedback visual)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            // El preventDefault ya está en el HTML, esto es extra feedback
            const emailInput = form.querySelector('input[type="email"]');
            if(emailInput.value) {
                alert('¡Gracias por tu interés! Te enviaremos el temario a: ' + emailInput.value);
                emailInput.value = ''; // Limpiar campo
            }
        });
    });
});