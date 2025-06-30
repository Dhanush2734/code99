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