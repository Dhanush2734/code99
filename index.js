// nav-bar

const menuIcon = document.querySelector('.nav-bar i');
const navMenu = document.querySelector('.nav-bar ul');
menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('navslide');
});




// choose section

function choose(data) {

    let user = document.getElementsByClassName("hii");
    let user1 = document.getElementsByClassName("box")
    for (let i = 0; i < user.length; i++) {
        let data1 = user[i];
        let data2 = user1[i];
        if (data1.id == data) {
            data2.classList.add("para");
        } else {
            data2.classList.remove("para");
        };
    };
};



// FQAS section

function sample(element) {
    let users = document.getElementsByClassName("hey");
    let icons = document.getElementsByClassName("hlo");

    for (let i = 0; i < users.length; i++) {
        let data2 = users[i];
        let icon = icons[i]
        if (data2.id == element) {
            data2.classList.add("paras");
            icon.classList.add("downs");

        } else {
            data2.classList.remove("paras");
            icon.classList.remove("downs");

        };
    };
};

// copter

const rocket = document.getElementById('rocket');
const smoke = document.querySelector('.smoke');

rocket.addEventListener('click', () => {
    // Add the animation class to both
    rocket.classList.add('animate');
    smoke.classList.add('animate');

    // Remove the class after animation ends so it can be triggered again
    //   setTimeout(() => {
    //     rocket.classList.remove('animate');
    //     smoke.classList.remove('animate');
    //   }, 1000); // Duration must match your animation duration
});