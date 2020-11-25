const btn_code = document.getElementById('btn-code');
const btn_grphx = document.getElementById('btn-grphx');
const btn_misc = document.getElementById('btn-misc');

let coding_section = document.getElementById('coding--container');
let graphics_section = document.getElementById('graphics--container');
let misc_section = document.getElementById('misc--container');

$(btn_grphx).click(function() {
    $(graphics_section).show();

    $(misc_section).hide();
    $(coding_section).hide();
});

$(btn_code).click(function() {
    $(coding_section).show();
    $(graphics_section).hide();
    $(misc_section).hide();
});

$(btn_misc).click(function() {
    $(coding_section).hide();
    $(graphics_section).hide();
    
    $(misc_section).show();
});