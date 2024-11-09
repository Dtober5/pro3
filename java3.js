const circle = document.querySelector('#circle');
    const button = document.querySelector('#color-toggle-btn');

    let firstcolor = true;

    circle.addEventListener('mouseenter', () => {
        if (!circle.classList.contains('hover')) {
            circle.classList.add('hover');
        }
    });

    circle.addEventListener('mouseleave', () => {
        if (circle.classList.contains('hover')) {
            circle.classList.remove('hover');
        }
    });

    button.addEventListener('click', () => {
        if (firstcolor) {
            circle.style.backgroundColor = '#262626';
            circle.style.borderColor = '#B3001B';
        } else {
            circle.style.backgroundColor = '#255C99';
            circle.style.borderColor = '#7EA3CC';
        }
        firstcolor = !firstcolor;
    });
