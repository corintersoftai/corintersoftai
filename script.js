document.addEventListener('DOMContentLoaded', () => {
    
    // Accordion Logic
    const acc = document.getElementsByClassName("accordion-button");
    
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            // Toggle active class on button
            this.classList.toggle("active");

            // Toggle panel visibility
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                // Close other open panels (optional, but cleaner)
                const allPanels = document.querySelectorAll('.accordion-content');
                const allBtns = document.querySelectorAll('.accordion-button');
                
                allPanels.forEach(p => p.style.maxHeight = null);
                allBtns.forEach(b => {
                    if (b !== this) b.classList.remove('active');
                });

                // Open this panel
                panel.style.maxHeight = panel.scrollHeight + "px";
                this.classList.add("active");
            } 
        });
    }

    // Input Labels Animation Helper (for consistent styling on page load if values exist)
    const inputs = document.querySelectorAll('.hero-form input');
    
    inputs.forEach(input => {
        // Check on load
        if(input.value !== "") {
            input.setAttribute('data-has-value', 'true');
        }

        // Check on change
        input.addEventListener('input', function() {
            if(this.value !== "") {
                this.setAttribute('data-has-value', 'true');
            } else {
                this.removeAttribute('data-has-value');
            }
        });
    });
});
