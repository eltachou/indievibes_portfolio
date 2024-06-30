// Toggle menu for smaller screens
const toggleMenu = document.getElementsByClassName('toggle-menu')[0];
const navbarContent = document.getElementsByClassName('menu')[0];
const findmusicMenu = document.getElementsByClassName('nav-right')[0];

toggleMenu.addEventListener('click', () => {
    navbarContent.classList.toggle('active');
    findmusicMenu.classList.toggle('active');
})


// Login & Sign Up form page
const forms = document.querySelector('.form-wrapper');
const links = document.querySelectorAll('.navtolinks');

// When individual links are clicked on the form, swap the form to sign-up or login
/* Form link swap referenced from CodingLab */
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        forms.classList.toggle('switch-form');
    })
})


function loginSuccess() {
    const loginEmail = document.querySelector('.user-login');
    const loginPassword = document.querySelector('.user-password');

    // If all blanks are filled, return the page to homepage, else show error
    if(loginEmail.value && loginPassword.value) {
        window.location.href = 'index.html';
        alert('Login Successful! Welcome back!');
    } else {
        alert('Error: Please check your email and password.');
    }
}

function registerSuccess() {
    const registerEmail = document.querySelector('.user-register');
    const registerPassword = document.querySelector('.password-register');
    const confirmPassword = document.querySelector('.confirm-password');

    // If all blanks are filled, return the page to homepage, else show error
    if(registerEmail.value && registerPassword.value && confirmPassword) {
        window.location.href = 'index.html';
        alert('Welcome to IndieVibes!');
    } else {
        alert('Error: Please check your email and password.');
    }
}


// Login & Sign Up button in navbar click
function redirectForm(formID) {
    const formURL = `login_form.html#${formID}`;
    window.location.href = formURL;
}


// Audio play on play button click - Query Selector and then loop through all
const audioButtons = document.querySelectorAll('.music-audio');

audioButtons.forEach((audioButton) => {
    audioButton.addEventListener('click', function() {
        const playIcon = this.querySelector('i');
        const audioBar = this.querySelector('audio');  

        if (audioBar.style.display === 'none' && playIcon.style.display === 'block') {
            audioBar.style.display = 'block';
            playIcon.style.display = 'none';
            audioBar.play();
        } else {
            audioBar.style.display = 'none';
            playIcon.style.display = 'block';
            audioBar.pause();
        }
    });
});


// Alert non-functional item
document.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('no-function')) {
        alert("Sorry, I don't have functionality at the moment.");
    }
}) 


