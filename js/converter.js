var Converter = (function() {

    // Private stuff up here
    var conversionVat = 1.23;
   // var offsetValue = 32;


    // Public methods here
    return {
        convertFromAmountToAmountPlusVat: function(currency) {
            var num = parseInt(currency);
            if (isNaN(num) == true) {
                throw new Error ("Not a number");
            }
            num = (num * conversionVat);
            return num;
        },

        convertFromAmountPlusVatToAmount: function(currency) {
            var num = parseInt(currency);
            if (isNaN(num) == true) {
                throw new Error ("Not a number");
            }
            num = (num / conversionVat);
            return num;
        } 
        
    }
}())