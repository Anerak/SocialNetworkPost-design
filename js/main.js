const theater = document.querySelector('.theater');
const thimg = document.getElementById('th-img');
const container = document.querySelector('.container');

document.querySelectorAll('img:not(#th-img)').forEach((i) => {
    i.addEventListener('click', (e) => {
        thimg.setAttribute('src', e.target.getAttribute('src'));
        //container.style.display = "none";
        //document.body.style.overflow = "hidden";
        //theater.style.display = "flex";
        document.body.classList.add('thopen');
        theater.classList.add('active');
    });
});

function closeTheater() {
    //theater.style.display = "none";
    //container.style.display = "flex";
    thimg.setAttribute('src', '');
    //document.body.style.overflow = "";
    document.body.classList.remove('thopen');
    theater.classList.remove('active');
}


function checkInput(event) {
    let inp = event.target;
    let bttn = inp.nextElementSibling;
    if (inp.value.trim() === "") {
        bttn.setAttribute('disabled', 'true');
    } else {
        bttn.removeAttribute('disabled');
    }
}
document.querySelectorAll('input.comment-input').forEach((el) => el.addEventListener('input', checkInput));
document.querySelectorAll('button.submit').forEach((el) => el.addEventListener('click', (e) => console.log('Clicked')));