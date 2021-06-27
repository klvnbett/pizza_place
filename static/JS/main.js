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
var pizza;
$(document).ready(function() {
    $("#formid").submit(function(event) {
        event.preventDefault();
        $("#calculatebill").show();
        var inputtedName = $("#name").val();
        var inputtedQuantity = parseInt($("#quantity").val());
        var typeArray = [];
        var quantityArray = [];
        $("input:checkbox[name=pizzatype]:checked").each(function() {
            var inputtedQuantity = $(this).val();
            quantityArray.push(inputtedQuantity);
            $("#quantityDisplay").text(inputtedQuantity + ",");
        });
        $("input:checkbox[name=pizzatype]:checked").each(function() {
            var inputtedQuantity = $(this).val();
            quantityArray.push(inputtedQuantity);
            $("#quantityDisplay").text(inputtedQuantity + ",");
        });
        var inputtedSize = $("input:radio[name=pizzasize]:checked").val();
        $("nameDisplay").text(inputtedName);
        $("#sizeDisplay").text(inputtedSize);
        pizza = new pizza(quantityArray, inputtedSize);
        var quantityBasedAmt = pizza.quantityBasedAmount();
        var sizeBasedAmt = pizza.sizeBasedAmount();
        pizza.calculateCost(quantityBasedAmt, sizeBasedAmt);
    });
});