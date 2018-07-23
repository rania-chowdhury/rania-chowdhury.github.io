function openTab(tabName, element, color) {
    // declare all variables
    var i, tabcontent, tablinks, pagecontent;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
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
}
function openPage(pageName){
    var i, tabcontent
    // hide all elements with class="content" by default
    tabcontent = document.getElementsByClassName("content");
    for(i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"
    }
    // show specific tab content
    document.getElementById(pageName).style.display = "block";
}
// get element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();