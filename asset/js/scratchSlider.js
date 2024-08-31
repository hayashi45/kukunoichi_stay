document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.service_slider');

    sliders.forEach(slider => {
        const slides = slider.querySelectorAll('.slider-wrapper .slide');
        const sliderWrapper = slider.querySelector('.slider-wrapper');
        const prevButton = slider.querySelector('.prev');
        const nextButton = slider.querySelector('.next');
        const dotsContainer = slider.querySelector('.pagination');

        let currentIndex = 0;

        // ドットを作成する関数
        function createDots() {
            dotsContainer.innerHTML = ''; // 既存のドットをクリア
            slides.forEach((_, index) => {
                const dot = document.createElement('span');
                dot.classList.add('pagination-circle');
                dot.setAttribute('data-index', index);
                dot.addEventListener('click', () => {
                    currentIndex = index;
                    updateSliderPosition();
                });
                dotsContainer.appendChild(dot);
            });
            updateDots(); // ドットの初期状態を設定
        }

        // ドットの表示を更新する関数
        function updateDots() {
            const dots = dotsContainer.querySelectorAll('.pagination-circle');
            dots.forEach((dot, index) => {
                dot.classList.toggle('target', index === currentIndex);
            });
        }

        function updateSliderPosition() {
            sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
            updateDots(); // スライダー位置を更新した後にドットも更新
        }

        function showNextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSliderPosition();
        }

        function showPrevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSliderPosition();
        }

        nextButton.addEventListener('click', showNextSlide);
        prevButton.addEventListener('click', showPrevSlide);

        createDots(); // ドットを作成する
    });
});
