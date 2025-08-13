      //this part is me writing stuff up as i learn/refresh about it, i will comment every line with relevant data
      
      let name = 'Hello World using var'; // this is a string literal type of var
      let age = 30; // this is a number literal type of var, no such thing as int or float in JS only number
      let isOverage = true; // this is a boolean literal type of var
      let balance = undefined; // By default all undeclared variables are undefined but we can use = underfined to explicitly set a variable as undefined
      let finalBalance = null; // We use null to explicity clear a value of a predefined variable
      let person = {
            name: 'Jovan',
            age: 30,
            isOverage: true,
            balance: undefined}; //this is an object in JS, object can have many properties  
      person.age = 'Trideset' ; // this is the dot notation type to change the value of a property in an object, this is the default method, in JS we can change var type by declaring a dif value
      person['age'] = 30; // this is the bracked notation type to change the value of a property in in an object

      function finalbalance (balance, kamataposto){
            let kamata = (kamataposto/100) * balance;
            balance = balance-kamata;
            return balance;
      };  // this is how we declare a function in JS, standard practice, wrote a simple test function


      let sampleArray = [1, 2 ,'jovan', true]; // this is an array literal, array is a list of variables in certain order
      sampleArray[4] = 'ovo je peti var'; // this way we can easily add a new element to the array on the index we set
      sampleArray.push('ovo cemo ukloniti uskoro'); // this way we can add a new variable to the array at the end
      console.log(sampleArray); // to check if we added it
      sampleArray.pop(); // this way we can remove the last element from the array
      console.log(sampleArray); // to check if we removed it
      let jonavRedosled = sampleArray.indexOf('jovan'); // this will find the index of 'jovan' in the array
      console.log(jonavRedosled); // to check the index of 'jovan'


      const nameConst = 'Constant Hello World';
      
      // This is a comment i already know this but ok :>, this will log 'Hello World' to the console
      console.log('Hello World');


      //i use this section to see if my end values are correct as i write the practice code
      console.log(name);
      console.log(nameConst);
      console.log(person.balance);
      console.log(person.age);
      console.log(sampleArray);

      balance = finalbalance(10000, 30);

      console.log(balance);
