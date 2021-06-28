//business logic
function pizza(pizzatype, size, quantity, crust, toppings) {
    this.pizzatype = pizzatype;
    this.size = size;
    this.quantity = quantity;
    this.crust = crust;
    this.toppings = toppings;
}
pizza.prototype.pizzatypeBasedAmount = function() {
    if (this.pizzatype.length != 0) {
        var pizzatypePrice = this.pizzatype.length * 7;
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
    // pizza.prototype.quantityBasedAmount = function() {
    //     if(this.quantity!="0"){
    //         document.getElementById("")
    // }
    //}
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
            var inputtedPizzaType = $(this).val();
            typeArray.push(inputtedPizzaType);
            $("#typeDisplay").text(inputtedPizzaType + ",");
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