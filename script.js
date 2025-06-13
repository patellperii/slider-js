
const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
    const slides = carousel.querySelectorAll('.slide');
    const prevBtn = carousel.querySelectorAll('button')[0];
    const nextBtn = carousel.querySelectorAll('button')[1];
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }


    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
});
