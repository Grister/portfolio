const root = document.documentElement;
const themeSwitcher = document.getElementById("themeSwitch");

themeSwitcher.addEventListener('click', (e) => {
    if (e.target.checked == true) {
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
});
