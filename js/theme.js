document.addEventListener('DOMContentLoaded', () => {
    const changeButton = document.getElementById('light-dark');
    const body = document.body;

    const moon = '\u{1F319}';
    const sun = '\u2600';

    const savedTheme = localStorage.getItem('theme');

    if (savedTheme == 'dark') {
        body.classList.add('dark');
        changeButton.textContent = sun;
    } else {
        changeButton.textContent = moon;
    }

    changeButton.addEventListener('click', () => {
        const judgeTheme = body.classList.toggle('dark');
        changeButton.textContent = judgeTheme ? sun : moon;
        localStorage.setItem('theme', judgeTheme ? 'dark' : 'light');
    });
});
