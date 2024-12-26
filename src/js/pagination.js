const paginationPages = document.querySelectorAll('.pagination__page');
const cardWrappers = document.querySelectorAll('.card__wrapper');
const leftArrow = document.querySelector('.pagination__page-left');
const rightArrow = document.querySelector('.pagination__page-right');


function removeActiveClass() {
    paginationPages.forEach(page => {
        page.classList.remove('pagination__page-active');
    });
    cardWrappers.forEach(wrapper => {
        wrapper.classList.remove('card__wrapper-active');
    });
}

function setActiveCardWrapper(index) {
    cardWrappers.forEach((wrapper, i) => {
        [0, 1]
        if (i === index - 1) {
            wrapper.classList.add('card__wrapper-active');
        } else {
            wrapper.classList.remove('card__wrapper-active');
        }
    });
}

function updateArrows() {
    const activePage = document.querySelector('.pagination__page-active');
    const isFirstPage = activePage === paginationPages[1];
    const isLastPage = activePage === paginationPages[paginationPages.length - 2];

    if (isFirstPage) {
        leftArrow.classList.add('disable');
    } else {
        leftArrow.classList.remove('disable');
    }

    if (isLastPage) {
        rightArrow.classList.add('disable');
    } else {
        rightArrow.classList.remove('disable');
    }
}


paginationPages.forEach((page, index) => {
    if (index === 0 || index === paginationPages.length - 1) {
        // Пропускаем стрелки
        return;
    }

    page.addEventListener('click', () => {
        removeActiveClass();
        page.classList.add('pagination__page-active');
        setActiveCardWrapper(index);
        updateArrows();
    });
});


leftArrow.addEventListener('click', () => {
    const activePage = document.querySelector('.pagination__page-active');
    const previousPage = activePage.previousElementSibling;

    if (previousPage && !previousPage.classList.contains('pagination__page-left')) {
        const index = Array.from(paginationPages).indexOf(previousPage);
        removeActiveClass();
        previousPage.classList.add('pagination__page-active');
        setActiveCardWrapper(index);
        updateArrows();
    }
});

rightArrow.addEventListener('click', () => {
    const activePage = document.querySelector('.pagination__page-active');
    const nextPage = activePage.nextElementSibling;

    if (nextPage && !nextPage.classList.contains('pagination__page-right')) {
        const index = Array.from(paginationPages).indexOf(nextPage);
        removeActiveClass();
        nextPage.classList.add('pagination__page-active');
        setActiveCardWrapper(index);
        updateArrows();
    }
});

updateArrows();
setActiveCardWrapper(1);