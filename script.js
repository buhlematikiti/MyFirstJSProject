 var index = 0;
function changeColours(){
    var colours= ["red", "yellow","green","blue"]
    document.getElementsByTagName("body")[0].style.background = colours[index ++];

    if (index > colours.length -1)
    index= 0;
}