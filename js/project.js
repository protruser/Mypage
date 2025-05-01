document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.innerdiv-projects');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

            buttons.forEach((btn) => btn.classList.remove('active'));

            button.classList.add('active');

            projects.forEach((project) => {
                const categorySort = project.getAttribute('data-category');

                let projectToggle = false;

                if (category == 'All') {
                    projectToggle = true;
                } else if (categorySort == category) {
                    projectToggle = true;
                }

                if (!projectToggle) {
                    project.style.display = 'none';
                } else {
                    project.style.display = 'block';
                }
            });
        });
    });
});
