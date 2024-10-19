// script.js

document.addEventListener('DOMContentLoaded', function () {
  const music = document.getElementById('backgroundMusic');
  const toggleMusicButton = document.getElementById('toggleMusic');
  const socialButtons = document.querySelectorAll('.btn');
  const profileImage = document.querySelector('.profile-img');
  let isPlaying = true;

  // Verifica se a música pode ser tocada automaticamente
  music.play().catch(error => {
    console.log('Autoplay bloqueado. O usuário precisa interagir com a página.');
  });

  // Alterna entre pausar e tocar a música
  toggleMusicButton.addEventListener('click', function () {
    if (isPlaying) {
      music.pause();
      toggleMusicButton.textContent = '🔇';
    } else {
      music.play();
      toggleMusicButton.textContent = '🔊';
    }
    isPlaying = !isPlaying;
  });

  // Efeitos visuais ao carregar a página
  setTimeout(() => {
    document.querySelector('.container').classList.add('fade-in');
  }, 100);

  // Adiciona animações interativas ao passar o mouse sobre os ícones de redes sociais
  socialButtons.forEach(button => {
    button.addEventListener('mouseenter', function () {
      button.classList.add('hovered');
    });

    button.addEventListener('mouseleave', function () {
      button.classList.remove('hovered');
    });

    button.addEventListener('click', function () {
      button.classList.add('clicked');
      setTimeout(() => {
        button.classList.remove('clicked');
      }, 300);
    });
  });

  // Efeito de rotação contínua na foto de perfil ao clicar
  profileImage.addEventListener('click', function () {
    profileImage.classList.add('rotate');
    setTimeout(() => {
      profileImage.classList.remove('rotate');
    }, 1000);
  });

  // Adiciona animação de deslizamento e pausas no carrossel
  const carouselTrack = document.querySelector('.carousel-track');
  let carouselPosition = 0;
  const images = carouselTrack.children;
  const totalImages = images.length;
  const imageWidth = images[0].clientWidth;
  const carouselSpeed = 2000;

  function slideCarousel() {
    carouselPosition -= imageWidth;
    if (Math.abs(carouselPosition) >= imageWidth * totalImages) {
      carouselPosition = 0;
    }
    carouselTrack.style.transform = `translateX(${carouselPosition}px)`;
  }

  setInterval(slideCarousel, carouselSpeed);

  // Verifica o suporte a interação do usuário e altera as cores dos ícones conforme o tema do sistema
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  if (prefersDarkScheme.matches) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }

  prefersDarkScheme.addListener((e) => {
    if (e.matches) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  });
});
