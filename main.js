const contact_box =document.querySelector('#contact_box') ;

let show = function(){
    contact_box.style.display='block';
}


function toggleMenu() {
    var dropdown = document.getElementById("dropdown-content");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

document.getElementById("menuButton").addEventListener("click", function (event) {
    event.stopPropagation();
    toggleMenu();
});

document.querySelectorAll('.dropdown-content a').forEach(function (link) {
    link.addEventListener('click', function () {
        document.getElementById('dropdown-content').style.display = 'none';
    });
});

document.addEventListener("click", function (event) {
    var dropdown = document.getElementById("dropdown-content");
    if (!event.target.closest('.dropbtn') && !event.target.closest('.dropdown-content')) {
        dropdown.style.display = "none";
    }
});