const mode = document.getElementsByClassName('nav-link')[3];
console.log(mode);

mode.addEventListener('click', () => {
    let currentMode = document.getElementsByTagName('html')
    console.log(currentMode[0]);

    currentMode[0].setAttribute('data-bs-theme', 'light')

    // if(currentMode[0].data-bs-theme == 'light') {
    //     currentMode[0].setAttribute('data-bs-theme', 'dark');
    // }
    // if (currentMode.data-bs-theme == 'dark') {
    //     // currentMode.data-bs-theme 'light';
    //     console.log('YES')
    // } else {
    //     console.log('NO')
    // }

})