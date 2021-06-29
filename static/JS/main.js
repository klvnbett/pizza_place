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
pizza.prototype.quantityBasedAmount = function() {
    this.quantity = document.getElementById('number').val()
    if (this.quantity != 0) {
        return this.quantity;
    } else {
        alert("Enter the quantity you need");
    }
}
pizza.prototype.calculateCost = function(pizBasedAmt, sizeBasedAmt) {
    var totalCost = (pizBasedAmt + sizeBasedAmt) * quantity;
    $("#totalcostDisplay").innerHTML(totalCost);
}
var pizza;
$(document).ready(function() {
    $("#formid").submit(function(event) {
        event.preventDefault();
        $("#calculatebill").show();
        var inputtedName = $("#name").val();
        var inputtedQuantity = parseInt($("#number").val());
        var typeArray = [];
        //var quantityArray = [];
        $("input:checkbox[name=pizzatype]:checked").each(function() {
            var inputtedPizzaType = $(this).val();
            typeArray.push(inputtedPizzaType);
            $("#typeDisplay").text(inputtedPizzaType + ",");
        });
        // $("input:checkbox[name=pizzatype]:checked").each(function() {
        //     var inputtedQuantity = $(this).val();
        //     quantityArray.push(inputtedQuantity);
        //     $("#quantityDisplay").text(inputtedQuantity + ",");
        // });
        var inputtedSize = $("input:radio[name=pizzasize]:checked").val();
        $("nameDisplay").text(inputtedName);
        $("#sizeDisplay").text(inputtedSize);
        $("#quantityDisplay").text(inputtedQuantity);
        pizza = new pizza(quantityArray, inputtedSize);
        var pizzatypeBasedAmt = pizza.pizzatypeBasedAmount();
        var sizeBasedAmt = pizza.sizeBasedAmount();
        pizza.calculateCost((pizzatypeBasedAmt, sizeBasedAmt) * quantity);
    });
    $("#pick").onClick(function() {
        prompt("Enter your location for delivery");
        alert("you will incur an extra cost of 150 /= for delivery")
    });
});
//delivery or pick choice
// $(document).ready(function() {
//             $("#pick").onClick(function() {
//                 prompt("Enter your location for delivery");
//                 alert("you will incur an extra cost of 150 /= for delivery")
//             })
//         }
// ${("#pick").on('click', function() {
//     if (validatepick() != NaN) {
//         validatepick();
//     } else {
//         return totalCost;
//     }
// });
// $("#deliver").on('click', function() {
//     if
// });}