function link(sub, url, text) {
    if(sub) {
        return "<a href=\'../"+url+"\' class=\'navbar-link-obj\'>"+text+"</a>";
    }
    return "<a href=\'"+url+"\' class=\'navbar-link-obj\'>"+text+"</a>";
}

$(document).ready(function() {
    $("#subfolder").hide(0);
    var html = $("body").html();
    var sub = $("#subfolder").html() == 'true';

    var injection = "<span id=\'navbar\'>"+
    "<ul id=\'navbar-obj\'>"+
    "<span id=\'header\'>"+link(sub,"index.html","GlowClient")+"</span>"+
    "<li class=\'navbar-link\'>"+link(sub,"about.html","About")+"</li>"+
    "</ul>"+
    "</span>";

    $("body").html(injection + html);
});
