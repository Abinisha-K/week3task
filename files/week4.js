function calculateCoffeeSupply(age, cupsPerDay) {
    var maxAge = 100;
    var totalNeeded = (cupsPerDay * 365) * (maxAge - age);
    var message = 'You will need ' +totalNeeded + ' cups of coffee  to keep you awake until the age of ' +maxAge;
    console.log(message);

}
calculateCoffeeSupply(28, 20);
calculateCoffeeSupply(28, 5.5);
calculateCoffeeSupply(28, 400);
