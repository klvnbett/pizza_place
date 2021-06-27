//business logic
function pizza(pizzatype, size) {
    this.pizzatype = pizzatype;
    this.size = size;
}
pizza.prototype.pizzatypeBasedAmount = function() {
    if (this.quantity.length != 0) {
        var pizzatypePrice = this.quantity.length * 7;
        return pizzatypePrice;
    } else {
        alert(" kindly choose your pizza type");

    }
}
pizza.prototype.sizeBasedAmount = function() {
    if (this.size === "small") {
        return 800;
    } else if (this.size === "medium") {
        return 1000;
    } else if (this.size = "large") {
        return 1300;
    } else {
        alert("Ensure to choose the size you prefer");
    }
}
pizza.prototype.calculateCost = function(pizBasedAmt, sizeBasedAmt) {
    var totalCost = pizBasedAmt + sizeBasedAmt;
    $("#totalcostDisplay").innerHTML(totalCost);
}