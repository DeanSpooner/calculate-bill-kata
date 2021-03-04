const calculateBill = function (price, vat, tip) {

    if (!price || !vat || !tip) {
        return "error";
    } else {
        let total = price + vat + tip;
        return "£" + total;
    };
};

module.exports = calculateBill;