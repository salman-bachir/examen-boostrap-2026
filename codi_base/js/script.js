// Fitxer script.js - codi per validar el formulari de reserva
document.addEventListener('DOMContentLoaded', function () {

    // Seleccionem el formulari i el contenidor del missatge de confirmació
    const form = document.getElementById('formulariReserva');
    const missatgeBox = document.getElementById('missatgeConfirmacio');

    // Escoltem l'esdeveniment d'enviament (submit)
    form.addEventListener('submit', function (event) {
        
        // 1. Evitem el comportament per defecte (que es carregui o refresqui la pàgina)
        event.preventDefault();
        event.stopPropagation();

        // 2. Comprovem si el formulari compleix la validació d'HTML5 / Bootstrap
        if (!form.checkValidity()) {
            // Si hi ha camps buits o incorrectes, apliquem les classes de Bootstrap per mostrar errors
            form.classList.add('was-validated');
            missatgeBox.classList.add('d-none'); // Assegurem que el missatge d'èxit estigui ocult
        } else {
            // 3. Si tot és correcte:
            form.classList.remove('was-validated');
            
            // Obtenim el nom de l'usuari per personalitzar el missatge
            const nomUsuari = document.getElementById('nom').value;

            // Inserim el text de confirmació en la caixa d'alerta
            missatgeBox.innerHTML = `
                <strong>¡Reserva realitzada amb èxit!</strong><br>
                Gràcies <strong>${nomUsuari}</strong>, hem rebut correctament la teva petició de reserva. Ens posarem en contacte amb tu en breu.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            `;
            
            // Mostrem la caixa eliminant la classe 'd-none'
            missatgeBox.classList.remove('d-none');

            // 4. Reiniciem (netejem) els camps del formulari
            form.reset();
        }
    });

});
