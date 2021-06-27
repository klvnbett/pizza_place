//business logic
function pizza(pizzatype, size) {
    this.pizzatype = pizzatype;
    this.size = size;
}
pizza.prototype.quantityBasedAmount = function() {
    if (this.quantity.length != 0) {
        var pizzatypePrice = this.quantity.length * 7;
        return pizzatypePrice;
    } else {
        alert(" kindly choose your pizza type")
    }
}