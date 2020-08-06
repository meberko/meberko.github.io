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
    window.scrollTo({top: 0, behavior: 'smooth'});
    resize()
};

function resize() {
    var about_location = document.getElementById("about").offsetTop-navbar_height-margin
    var projects_location = document.getElementById("projects").offsetTop-navbar_height-margin
    locations = {
        home: 0,
        about: about_location,
        projects: projects_location
    };
}

function scroll() {
    var curr = window.scrollY;
    if(curr >= locations["home"] && curr < 0.95*locations["about"]) {
        toggle_active("navbar-home");
        //remove_social_icons();
    }
    else if(curr >= 0.95*locations["about"] && curr < 0.95*locations["projects"]) {
        toggle_active("navbar-about");
        //add_social_icons()
    }
    else if(curr >= 0.95*locations["projects"]) toggle_active("navbar-projects");
};

/*
    function add_social_icons() {
        document.getElementById("navbar-github-icon-li").classList.remove("uk-animation-reverse");
        document.getElementById("navbar-linkedin-icon-li").classList.remove("uk-animation-reverse");
        document.getElementById("navbar-gmail-icon-li").classList.remove("uk-animation-reverse");
        document.getElementById("navbar-github-icon-li").classList.add("uk-animation-slide-top");
        document.getElementById("navbar-linkedin-icon-li").classList.add("uk-animation-slide-top");
        document.getElementById("navbar-gmail-icon-li").classList.add("uk-animation-slide-top");
    }

    function remove_social_icons() {
        document.getElementById("navbar-github-icon-li").classList.add("uk-animation-reverse");
        document.getElementById("navbar-linkedin-icon-li").classList.add("uk-animation-reverse");
        document.getElementById("navbar-gmail-icon-li").classList.add("uk-animation-reverse");
        document.getElementById("navbar-github-icon-li").classList.remove("uk-animation-slide-top");
        document.getElementById("navbar-linkedin-icon-li").classList.remove("uk-animation-slide-top");
        document.getElementById("navbar-gmail-icon-li").classList.remove("uk-animation-slide-top");
        document.getElementById("navbar-github-icon-li").classList.add("uk-animation-slide-top");
        document.getElementById("navbar-linkedin-icon-li").classList.add("uk-animation-slide-top");
        document.getElementById("navbar-gmail-icon-li").classList.add("uk-animation-slide-top");
    }
*/


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
