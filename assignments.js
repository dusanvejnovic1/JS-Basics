// in this .js file we will finish 10 assignments  using what we learned so far

// Assignment 1

// Imagine you're storing information about a website visitor.
// Create three variables: visitorName (string), visitorAge (number), and visitorFavoritePage (string).
// Log a message to the console showing all three values, e.g. "Alice (24) likes the Home page.

let visitorName = 'Jovan';
let visitorAge = 23;
let visitorFavoritePage = 'Gallery';

console.log(visitorName + ' is ' + visitorAge + ' and likes ' + visitorFavoritePage);


// Assignment 2
// You're designing a book card for an online library.
// Create an object called book with the following properties:
//      title (string)
//      author (string)
//      yearPublished (number)
// Update the yearPublished to this year using dot notation.
// Add a property called isAvailable (boolean) using bracket notation.
// Log the book object to the console, ready for display.  

let book = {
    title: 'Paranoja u Nju Delhiju',
    author: 'Iva Vrtaric',
    yearPublished: 2016,
}

book.yearPublished = 2025;
book['isAvailable'] = true;

console.log(book);


// Assignment 3
// You're building a product page for a shop.
// Create an array productColors with three color strings for a T-shirt.
// Add a new color to the end of the array using push.
// Change the second color to "yellow" (maybe stock changed).
// Log the updated colors and show how many color options are available.

let productColors = ['white', 'blue', 'red'];
productColors.push('black');
productColors[1] = 'yellow';

console.log(productColors + ' The total number of available colors is ' + productColors.length);

//Assignment 4
// Greet a customer by name on your website.
// Write a function called greetCustomer that takes a name and logs "Welcome, [name]! Thanks for visiting our store."
// Call the function with a sample customer name.

function greetCustomer(name) {
    return '"Welcome, ' + name + '! Thanks for visiting our store."'
};

console.log(greetCustomer('Jovan'));


//Assignment 5
//You need a utility to show prices after a discount.
//Write a function discountPrice that takes a price and returns the price after subtracting 5.
//Call it with a sample price (like 20) and log the result.

function discountPrice(price) {
    return price - 5
};

console.log(discountPrice(20));

//Assignment 6
//Create an array basketFruits with three fruit names.
//Write a function showFruit that takes the array and an index, and logs the fruit at that index (e.g. "Fruit: Banana").
//Use the function to show the first and third fruits.

let basketFruits = ['banana', 'apple', 'orange'];

function showFruit(firstFruit, secondFruit) {
    firstFruit = basketFruits[firstFruit];
    secondFruit = basketFruits[secondFruit];
    return 'Fruit: ' + firstFruit + ' and Fruit: ' + secondFruit;
}

console.log(showFruit(0, 2));

//Assignment 7
//You need to generate badges for employees at an event.
//Create an object employee with firstName (string) and department (string).
//Add a method badge that returns: "Employee: [firstName] - Department: [department]".
//Log the result of calling the badge method.

let employeeData = {
    firstName: undefined,
    department: undefined,
    badge(firstName, department) {
        return 'Employee: ' + firstName + ' - Department: ' + department
    },
}

console.log(employeeData.badge('Jovan', 'QA'));


//Assignment 8
//You are building a feature for an online shop to display product details and greet the user.
//Create variables for a product's name, price, and category.
//Create an array of available colors for the product.
//Create an object product that includes the above details and the colors array.
//Add a method to the object called describe that returns a string describing the product (including all details).
//Write a function showWelcome that takes a customer name and logs a personalized greeting.
//Call both the describe method and showWelcome function and log their outputs.

let productName = 'iPhone 17';
let productPrice = '9999$';
let productCategory = 'Mobile Phones';
productColors = ['Midnight', 'Starlight', 'Product RED'];

productDetails = {
    productName,
    productPrice,
    productCategory,
    productColors,
    productSummary() {
        return 'Product name: ' + productName + ', Product price: ' + productPrice + ', Product category : ' + productCategory + ', Available colors : ' + productColors;
    },
};
function showWelcome(name) {
    return 'Welcome ' + name + ' you have selected, ' + ' ' + productDetails.productSummary()
};

console.log(showWelcome('Jovan'));

//Assignment 9
//Create variables for the attendee's name and age.
//Create an array of sessions they signed up for.
//Create an object `attendee` that includes their details and sessions array.
//Add a property to indicate if they've checked in yet (`isCheckedIn` boolean) using bracket notation.
//Add a method `registrationSummary` that returns a summary string:  
// "Attendee: [name], Age: [age], Sessions: [session1, session2, ...], Checked In: Yes/No"
//Log the registration summary.

let attendeeName = 'Jovan Jovanovic';
let attendeeAge = 33;
let attendeeSessions = ['JavaScript Basics', 'Control Flow', 'Functions & Objects'];
let attendee = {
    attendeeName,
    attendeeAge,
    attendeeSessions,

}

attendee['attendeeIsCheckedIn'] = true;

attendee.registrationSummary = function () {
    return 'Attendee: ' + this.attendeeName + ', Age: ' + this.attendeeAge + ', Sessions: ' + this.attendeeSessions + ', Checked In:' + this.attendeeIsCheckedIn
};

console.log(attendee.registrationSummary());


//Assignment 10
//You're developing an internal tool to display company services and employee contacts.
//Create an array `services` containing three service names.
//Create an object `employeeContact` with properties: `name` (string), `role` (string), and `email` (string).
//Create an object `companyCatalog` containing both the `services` array and `employeeContact` object.
//Add a method `catalogInfo` to `companyCatalog` that returns a string:  
//"Services: [service1, service2, ...]. Contact: [name] ([role]) - [email]"
//Log the result of calling the `catalogInfo` method.

let services = ['FQA', 'LQA', 'QA Automation'];
let employeeContact = {
    name: 'Jovan Jovanovic',
    role: 'Senior QA Engineer',
    email: 'jovan.jovanovic@company.com'
}

let companyCatalog = {
    services,
    employeeContact,
    catalogInfo() {
        return 'Services: ' + this.services + '. Contact: ' + this.employeeContact.name + ' (' + this.employeeContact.role + ') - ' + this.employeeContact.email
    },
};

console.log(companyCatalog.catalogInfo());

//Assignment 11
//You are building the basic data structure for a digital storefront homepage, showcasing products, displaying a welcome message, and
//highlighting staff and featured books.
//Create a variable storeName for the shop name and a variable welcomeMessage for a greeting.
//Create an array featuredProducts containing three product objects. Each product should have:
//name (string)
//price (number)
//colors (array of strings)
//a method describe that returns a string summarizing the product.
//Create an object staffMember with a name, department, and a method badge that returns "Employee: [name] - Department: [department]".
//Create an object featuredBook with properties: title, author, yearPublished, and isAvailable (boolean).
//Write a function showHomepage that logs:
//The store name and welcome message,
//A list of all featured product descriptions (by calling their describe method),
//The staff member's badge,
//The featured book object.
//Call showHomepage to display your store's homepage summary in the console.

const storeName = 'Gigitron';
const welcomeMessage = 'Welcome to Gigitron!';
const featuredProducts = [

    {
        name: 'iPhone 14',
        price: '599$',
        colors: ['white', 'black'],
        productDescribe() {
            return `Product name: ${this.name} Price: ${this.price} Colors: ${this.colors.join(', ')}`
        }
    },

    {
        name: 'iPhone 16',
        price: '999$',
        colors: ['white', 'red'],
        productDescribe() {
            return `Product name: ${this.name} Price: ${this.price} Colors: ${this.colors.join(', ')}`
        }
    },

    {
        name: 'Samsung Galaxy Flip 6',
        price: '1399$',
        colors: ['black'],
        productDescribe() {
            return `Product name: ${this.name} Price: ${this.price} Colors: ${this.colors.join(', ')}`
        }
    }
];

const staffMember = {
    name: 'Jovan Jovanovic',
    department: 'Customer Service',
    badge() {
        return `"Employee: ${this.name} - Department: ${this.department}"`
    }
};

const featuredBook = {
    title: 'Life of Pi',
    author: 'Yann Martel',
    yearPublished: 2001,
    isAvailable: true
}

function showHomepage() {
    console.log(storeName);
    console.log(welcomeMessage);
    console.log('Featured products:');
    featuredProducts.forEach(product => console.log(product.productDescribe()));
    console.log('Featured employee:');
    console.log(staffMember.badge());
    console.log('Featured book:');
    console.log(featuredBook);
};

showHomepage();

