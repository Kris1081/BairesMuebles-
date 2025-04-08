document.addEventListener('DOMContentLoaded', function() {
    const preguntas = document.querySelectorAll('.faq-question');
    
    preguntas.forEach(pregunta => {
        pregunta.addEventListener('click', function() {
            this.classList.toggle('active');
            
            const respuesta = this.nextElementSibling;
            if (respuesta.classList.contains('show')) {
                respuesta.classList.remove('show');
            } else {
                document.querySelectorAll('.faq-answer').forEach(item => {
                    item.classList.remove('show');
                });
                document.querySelectorAll('.faq-question').forEach(item => {
                    item.classList.remove('active');
                });
                
                this.classList.add('active');
                respuesta.classList.add('show');
            }
        });
    });
});