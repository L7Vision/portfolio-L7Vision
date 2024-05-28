var ul = document.querySelector('nav ul');

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');

        var projetos = document.querySelectorAll(".projeto");

        projetos.forEach(function(projeto) {
            projeto.classList.remove("hide");
        });
    } else {
        ul.classList.add('open');

        var projetos = document.querySelectorAll(".projeto");

        projetos.forEach(function(projeto) {
            projeto.classList.add("hide");
        });
    }
}

