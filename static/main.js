var navbar_height = document.getElementById("navbar").offsetHeight;

function load() {
    window.scrollTo({top: navbar_height, behavior: 'smooth'});
}

function navbar_click(e) {
    var clicked_id = e.id;
    var navbar_items = document.getElementsByClassName("navbar-item");
    var section_name = e.id.split("-")[1];
    for(var i=0; i<navbar_items.length; i++) {
        var item = navbar_items.item(i);
        if(item.id == clicked_id) {
            item.classList.add("uk-active");
        }
        else {
            item.classList.remove("uk-active");
        }
    }
    if(section_name == "home") window.scrollTo({top: document.getElementById(section_name).offsetTop, behavior: 'smooth'});
    else window.scrollTo({top: document.getElementById(section_name).offsetTop - navbar_height, behavior: 'smooth'});
}
