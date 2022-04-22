(function () {
    console.log('Hello World');
    // Add event listener
    document.addEventListener('mousemove', parallax);
    const elem = document.querySelector('.laptop');
    const elem2 = document.querySelector('#about-image-design');
    const skills = document.querySelector('.skills');
    const loading = document.querySelector('.Loading');
    const bar = document.querySelectorAll('.bar');
    const observer = new IntersectionObserver((entries) => {
        // Loop over the entries
        entries.forEach((entry) => {
            // If the element is visible
            if (entry.isIntersecting) {
                bar.forEach((bar) => {
                    bar.style.display = 'block';
                });
                setTimeout(() => {
                    bar[0].style.width = '94%';
                    bar[1].style.width = '92%';
                    bar[2].style.width = '99%';
                    bar[3].style.width = '95%';
                    bar[4].style.width = '90%';
                }, 500);
            } else {
                bar.forEach((bar) => {
                    bar.style.width = '0%';
                    bar.style.display = 'none';
                });
            }
        });
    });

    // Tell the observer which elements to track
    observer.observe(document.querySelector('.skills'));

    console.log(elem);
    function parallax(e) {
        let _w = window.innerWidth / 2;
        let _h = window.innerHeight / 2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;

        let x = `${0 - (_mouseX - _w) * 0.001}%`;
        let y = `${0 - (_mouseY - _h) * 0.001}%`;
        let x2 = `${0 + (_mouseX - _w) * 0.005}%`;
        let y2 = `${0 + (_mouseY - _h) * 0.005}%`;

        elem2.style.transform = `translate(${x2}, ${y2})`;
        elem.style.transform = `translate(${x}, ${y})`;
    }
})();
