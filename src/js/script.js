const root = document.documentElement;
const themeSwitcher = document.getElementById("themeSwitch");
const savedTheme = localStorage.getItem('theme');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const close = document.querySelector('.menu__close');

function toggleTheme(isDark) {
    if (isDark) {
        root.style.setProperty('--background-color', '#0D0D0D');
        root.style.setProperty('--main-color', '#F0F0F0');
        root.style.setProperty('--shadow', '9px 5px 30px 0 #7C8188');
        root.style.setProperty('--card-color', '#0D0D0Da3');
    } else {
        root.style.setProperty('--background-color', '#F0F0F0');
        root.style.setProperty('--main-color', '#0D0D0D');
        root.style.setProperty('--shadow', '18px 18px 30px 0px #d1d9e6, -13px -13px 30px 0 #fff');
        root.style.setProperty('--card-color', '#F0F0F0b3');
    }
};

if (savedTheme === 'dark') {
    themeSwitcher.checked = true;
    toggleTheme(true);
} else {
    themeSwitcher.checked = false;
    toggleTheme(false);
}

themeSwitcher.addEventListener('click', (e) => {
    if (e.target.checked) {
        toggleTheme(true);
        localStorage.setItem('theme', 'dark');
    } else {
        toggleTheme(false);
        localStorage.setItem('theme', 'light');
    }
});


burger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});
