window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    document.getElementById('showscroll').innerHTML = scrolled + "px";

}