
document.getElementsByClassName('dropdown').forEach((dropdown) => {

    let toggle_btn = dropdown.getElementsByClassName('dropdown-toggle')[0];

    let body_handler = () => {
        if (dropdown.classList.contains('open')) {
            dropdown.classList.remove('open');
            document.body.removeEventListener('click', body_handler);
        }
    };

    toggle_btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!dropdown.classList.contains('open')) {
            dropdown.classList.add('open');
            document.body.addEventListener('click', body_handler);
        } else {
            dropdown.classList.remove('open');
        }
    });

});
