<<<<<<< HEAD
const contact_box =document.querySelector('#contact_box') ;

let show = function(){
    contact_box.style.display='block';
}


function toggleMenu() {
    var x = document.getElementById("dropdown-content");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

document.querySelectorAll('.dropdown-content a').forEach(item => {
    item.addEventListener('click', () => {
        document.getElementById("dropdown-content").style.display = "none";
    });
});

// Collapse the menu when clicking outside
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn') && !event.target.closest('.dropdown-content')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
=======
const contact_box =document.querySelector('#contact_box') ;

let show = function(){
    contact_box.style.display='block';
}


function toggleMenu() {
    var x = document.getElementById("dropdown-content");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

document.querySelectorAll('.dropdown-content a').forEach(item => {
    item.addEventListener('click', () => {
        document.getElementById("dropdown-content").style.display = "none";
    });
});

// Collapse the menu when clicking outside
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn') && !event.target.closest('.dropdown-content')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
>>>>>>> 0f6a447 (Latest commit)
}