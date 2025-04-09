document.querySelectorAll('.modal-trigger').forEach(button => {
    button.addEventListener('click', () => {
      const modal = document.getElementById(button.dataset.modal);
      modal.classList.add('active');
    });
  });
  
  document.querySelectorAll('.close-modal').forEach(button => {
    button.addEventListener('click', () => {
      button.closest('.concept-detail-modal').classList.remove('active');
    });
  });
  document.querySelectorAll('.close-concept-art').forEach(button => {
    button.addEventListener('click', () => {
      button.closest('.concept-art-modal').classList.remove('active');
    });
  });
    
  function scrollCarousel(direction) {
    const track = document.querySelector('.carousel-track');
    const slideWidth = track.querySelector('.carousel-slide').offsetWidth + 32; // 32 for gap
    track.scrollBy({ left: direction * slideWidth, behavior: 'smooth' });
  }  