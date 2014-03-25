describe("My Converter", function() {
    it("should convert amount to totalplusvat", function () {
        expect(Converter.convertFromAmountToAmountPlusVat(1)).toBe(1.23);
    })
    it("amount to totalplusvat should be able to deal with strings", function () {
        expect(function () { Converter.convertFromAmountToAmountPlusVat("hello") }).toThrow(new Error("Not a number"));
    })
    it("should convert totalplusvat to amount", function () {
        expect(Converter.convertFromCelsToFahr(1)).toBe(0.77);
    })
    it("totalplusvat to amount should be able to deal with strings", function () {
        expect(function () { Converter.FromAmountPlusVatToAmount("hello") }).toThrow(new Error("Not a number"));
    })
})