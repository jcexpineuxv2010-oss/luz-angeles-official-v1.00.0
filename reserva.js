document.addEventListener('DOMContentLoaded', function () {
    // --- NUEVO: Detectar si viene una terapia seleccionada desde otra página ---
    const urlParams = new URLSearchParams(window.location.search);
    const terapiaParam = urlParams.get('terapia');

    if (terapiaParam) {
        const radioTarget = document.querySelector(`input[name="tipoTerapia"][value="${terapiaParam}"]`);
        if (radioTarget) {
            radioTarget.checked = true;
        }
    }
    // ------------------------------------------------------------------------

    const formReserva = document.getElementById('formReserva');
    const fechaInput = document.getElementById('fechaCita');

    if (fechaInput) {
        const today = new Date().toISOString().split('T')[0];
        fechaInput.min = today;
    }

    if (formReserva) {
        formReserva.addEventListener('submit', function (e) {
            e.preventDefault();

            const tipoTerapia = document.querySelector('input[name="tipoTerapia"]:checked').value;
            const fecha = document.getElementById('fechaCita').value;
            const hora = document.getElementById('horaCita').value;

            alert(`¡Cita agendada con éxito!\n\nModalidad: Terapia ${tipoTerapia}\nFecha: ${fecha}\nHora: ${hora}\n\nSe ha enviado un correo de confirmación al paciente.`);

            formReserva.reset();
            if (fechaInput) {
                const today = new Date().toISOString().split('T')[0];
                fechaInput.min = today;
            }
        });
    }
});