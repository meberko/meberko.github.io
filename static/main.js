var navbar_height = document.getElementById("navbar").offsetHeight;
var about_location = document.getElementById("about").offsetTop-navbar_height
var projects_location = document.getElementById("projects").offsetTop-navbar_height
var margin = 30

locations = {
    home: navbar_height,
    about: about_location,
    projects: projects_location
};

function load() {
    window.scrollTo({top: navbar_height, behavior: 'smooth'});
    resize()
};

function resize() {
    var about_location = document.getElementById("about").offsetTop-navbar_height-margin
    var projects_location = document.getElementById("projects").offsetTop-navbar_height-margin
    locations = {
        home: navbar_height,
        about: about_location,
        projects: projects_location
    };
}

function scroll() {
    var curr = window.scrollY;
    if(curr >= locations["home"] && curr < 0.95*locations["about"]) toggle_active("navbar-home");
    else if(curr >= 0.95*locations["about"] && curr < 0.95*locations["projects"]) toggle_active("navbar-about");
    else if(curr >= 0.95*locations["projects"]) toggle_active("navbar-projects");
};

function toggle_active(id) {
    var navbar_items = document.getElementsByClassName("navbar-item");
    for(var i=0; i<navbar_items.length; i++) {
        var item = navbar_items.item(i);
        if(item.id == id) item.classList.add("uk-active");
        else item.classList.remove("uk-active");
    }
};

function navbar_click(e) {
    var clicked_id = e.id;
    var section_name = e.id.split("-")[1];
    window.scrollTo({top: locations[section_name], behavior: 'smooth'});
};
