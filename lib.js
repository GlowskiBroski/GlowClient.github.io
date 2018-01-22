function toggleComponent(toBeToggled, toggler, ms) {
    if($(toBeToggled).is(':visible')) {
        $(toggler).html('(+)');
        $(toBeToggled).hide(ms);
    } else {
        $(toggler).html('(-)');
        $(toBeToggled).show(ms);
    }
}