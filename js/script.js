function toggleMenu() {
    const nav = document.getElementById('nav');
    if (nav.classList.contains('active')) {
        nav.classList.remove('active')
        document.querySelector('.icon').src = "assets/menu_white_36dp.svg"
    } else {
        nav.classList.add('active')
        document.querySelector('.icon').src = "assets/close_white_36dp.svg"
    }
}