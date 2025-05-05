// Função para revelar elementos ao rolar a página
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach((reveal) => {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add('active');
    } else {
      reveal.classList.remove('active');
    }
  });
}

const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

// Adiciona evento de clique a cada link
links.forEach(link => {
  link.addEventListener("click", () => {
    // Obtém o atributo data-section do link
    const target = link.getAttribute("data-section");

    // Esconde todas as seções
    sections.forEach(section => {
      section.classList.remove("active");
    });

    // Mostra a seção correspondente
    document.getElementById(target).classList.add("active");
  });
});


window.addEventListener('scroll', () => {
  revealOnScroll();
  animateSkills();
});

