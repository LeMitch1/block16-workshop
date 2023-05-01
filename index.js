const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};

// create calculateTotal() function that takes in customer as parameter
//    calculate base total by multiplying pricePerRefill and refills
//    return total and save as variable

// create subscriptionDiscount() function that takes in customer as parameter
//    if true (has subscription), take total variable and multiply by .75
//    return total after subscription discount and update total variable

// create couponDiscount() function that takes in customer as parameter
//    if true(has coupon), take total and subtract 10
//    return total after coupon discount and update total variable

// print result to console "Your grand total is ${total}"

// COMMENT/UNCOMMENT RESPECTIVE NAMES TO TEST EACH CASE
let total = 0;

function calculateTotal(customer) {
  return customer.pricePerRefill * customer.refills;
}

total = calculateTotal(timmy);
// total = calculateTotal(sarah);
// total = calculateTotal(rocky);

function subscriptionDiscount(customer) {
  if (customer.subscription) {
    total *= 0.75;
  }
  return total;
}

total = subscriptionDiscount(timmy);
// total = subscriptionDiscount(sarah);
// total = subscriptionDiscount(rocky);

function couponDiscount(customer) {
  if (customer.coupon) {
    total -= 10;
  }
  return total;
}

total = couponDiscount(timmy);
// total = couponDiscount(sarah);
// total = couponDiscount(rocky);

console.log("Your grand total is $" + total);
