window._skel_config = {
    prefix: 'css/style',
        preloadStyleSheets: true,
    resetCSS: true,
    boxModel: 'border',
    grid: { gutters: 30 },
    breakpoints: {
        wide: { range: '1200-', containers: 1140, grid: { gutters: 50 } },
        narrow: { range: '681-1199', containers: 960 },
        mobile: { range: '-680', containers: 'fluid', lockViewport: true, grid: { collapse: true } }
    }
};

$(document).ready(function() {
    $("#convertbutton").click(function() {
        var aValue = $("#ainput").val();
        var tValue = $("#tinput").val();


        if (((aValue.length !=0) && (tValue.length !=0))
            || ((aValue.length == 0) && tValue.length == 0)) {
            alert("Please set one field, and only one field")
        }
        if (aValue.length != 0) {
            $("#tinput").val(Converter.convertFromAmountToAmountPlusVat(aValue));
        }
        else if (tValue.length != 0) {
            $("#ainput").val(Converter.convertFromAmountPlusVatToAmount(tValue));
        }
    });
    $("#clearbutton").click(function() {
        $("#tinput").val('');
        $("#ainput").val('');
    });
        
});