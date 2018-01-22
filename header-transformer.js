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
    "<span id=\'header\'>"+link(sub,"index.html","Surreal")+"</span>"+
    "<li class=\'navbar-link\'>"+link(sub,"about.html","About")+"</li>"+
    "<li class=\'navbar-link\'>"+link(sub,"buy.html","Buy")+"</li>"+
    "<li class=\'navbar-link\'>"+link(sub,"user/signin.html","Sign In")+"</li>"+
    "<li class=\'navbar-link\'>"+link(sub,"contact.html","Contact")+"</li>"+
    "<li class=\'navbar-link\'>"+link(sub,"client/index.html","Client")+"</li>"+
    "</ul>"+
    "</span>";

    $("body").html(injection + html);
});
