function openTab(tabName, pageName, element, color) {
    // declare all variables
    var i, tabs, tablinks, pagecontent;
    // Get all elements with class="tabs" and hide them
    tabs = document.getElementsByClassName("tabs");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    // remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    // show specific tab content
    document.getElementById(tabName).style.display = "block";
    // add specific color to button used to open tab content
    element.style.backgroundColor = color;

    // get all elements with class="content" and hide them
    pagecontent = document.getElementsByClassName("content");
    for (i = 0; i < pagecontent.length; i++) {
        pagecontent[i].style.display = "none"
    }
    // show specific page content
    document.getElementById(pageName).style.display = "block";
    // add specific color to button used to open tab content
    element.style.fontColor = color;
}
document.getElementById("defaultOpen").click();