let sandwich = {
  size: "large",
  price: 11.95,
  toppings: ["lettuce", "tomato", "mayo", "dijon", "cheddar"],
  orderSandwich: function () {
    return ` Your ${this.size} sandwich with ${this.toppings[0]},  ${this.toppings[1]},  ${this.toppings[2]},  ${this.toppings[3]}, and  ${this.toppings[4]} comes to $${this.price}.`;
  },
};
