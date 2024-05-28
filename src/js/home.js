document.addEventListener('DOMContentLoaded', function() {
    const btnMostrar = document.querySelector('.btn-mostrar-projetos');
    const btnMostrarMenos = document.createElement('button');
    btnMostrarMenos.classList.add('btn-mostrar-projetos', 'remover');
    btnMostrarMenos.innerText = 'Mostrar menos';

    btnMostrar.addEventListener('click', function() {
        const projetosInativos = document.querySelectorAll('.projetos .projeto:not(.ativo)');
        
        projetosInativos.forEach(projeto => {
            projeto.style.display = 'block';
            projeto.classList.add('ativo');
        });

        btnMostrar.parentNode.appendChild(btnMostrarMenos);
        btnMostrar.style.display = 'none';
    });

    btnMostrarMenos.addEventListener('click', function() {
        const projetosAtivos = document.querySelectorAll('.projetos .projeto.ativo');
        
        projetosAtivos.forEach(projeto => {
            projeto.style.display = 'none';
            projeto.classList.remove('ativo');
        });

        btnMostrar.style.display = 'block';
        btnMostrarMenos.style.display = 'none';
    });
});
