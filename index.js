// You are given an object book with the properties title, author, and yearPublished. Perform the following operations:
// 1.	Access the author property and print it.
// 2.	Modify the yearPublished property to 2022.
// 3.	Add a new property genre to the book object with the value “Fiction”.
// 4.	Delete the title property from the book object.

var book=
   {
    "title": "book theif",
    "author": "gadwal",
    "yearpublished": "1990",
    } 

    console.log(book);
    console.log(book.author);
    console.log(book.yearpublished="2020");
    console.log(book.genre="friction");
    delete book.title;
    console.log(book);

//     You are given an object employee with the properties name, age, position, and salary. Perform the following operations:
// 1.	Access the position property and print it.
// 2.	Modify the salary property to 50000.
// 3.	Add a new property department to the employee object with the value “HR”.
// 4.	Delete the age property from the employee object.

var employee=
   {
    "name": "kalyani",
    "age": "22",
    "position": "software engineer",
    "salary": "50000"
    } 

    console.log(employee);
    console.log(employee.position);
    console.log(employee.salary="50000");
    console.log(employee.department="HR");
    delete employee.age;
    console.log(employee);

    //     You are given an object product with the properties id, name, price, and category. Perform the following operations:
    // 1.	Access the price property and print it.
    // 2.	Modify the category property to “Electronics”.
    // 3.	Add a new property inStock to the product object with the value true.
    // 4.	Delete the id property from the product object.
    
    var product=
    {
        "id": "877",
        "name": "washing machine",
        "price": "45000",
        "category": "clothes washing",
    }
    
    console.log(product);
    console.log(product.price);
    console.log(product.category="electronics");
    console.log(product.instock="true");
    delete product.id;
    console.log(product);

    // You are given an object car with the properties make, model, year, and color. Perform the following operations:
    // 1.	Access the make property and print it.
    // 2.	Modify the color property to “Black”.
    // 3.	Add a new property engineType to the car object with the value “V6”.
    // 4.	Delete the year property from the car object.
     
     var car=
     {
        "make": "honda",
        "model": "thar",
        "year": "2024",
        "colour": "black",
     }

    console.log(car);
    console.log(car.make);
    console.log(car.colour="black");
    console.log(car.enginetype="V6");
    delete car.year;
    console.log(car);

//     You are given an object student with the properties name, age, grade, and school. Perform the following operations:
// 1.	Access the school property and print it.
// 2.	Modify the grade property to 95.
// 3.	Add a new property hobbies to the student object with the value ["reading", "sports"].
// 4.	Delete the age property from the student object.

     var student=
     {
        "name": "MLK",
        "age": "24",
        "grade": "9.8",
        "school": "Vidya Vikas E.M high school",
     }

     console.log(student);
     console.log(student.school);
     console.log(student.grade="95");
     console.log(student.hobbies="reading","sports");
     delete student.age;
     console.log(student);

// Question 6:
// You are given an object user with the following structure:
// const user = {
//   username: "john_doe",
//   profile: {
//     firstName: "John",
//     lastName: "Doe",
//     age: 28,
//     address: {
//       street: "456 Elm St",
//       city: "Gotham",
//       zip: "54321"
//     }
//   },
//   preferences: {
//     theme: "dark",
//     notifications: true
//   }
// };
// Perform the following operations:
// 1.	Access the city property from the address object and print it.
// 2.	Modify the theme property in the preferences object to “light”.
// 3.	Add a new property phone to the profile object with the value “555-9876”.
// 4.	Delete the zip property from the address object.

const user = {
      username: "john_doe",
      profile: {
         firstName: "John",
         lastName: "Doe",
         age: 28,
         address: {
           street: "456 Elm St",
           city: "Gotham",
           zip: "54321"
         }
       },
       preferences: {
        theme: "dark",
         notifications: true
       }
     }

console.log(user);
console.log(user.profile.address.city);
console.log(user.preferences['theme']="light");
console.log(user.profile.phone=["555-9876"]);
delete user.profile.address['zip'];
console.log(user);


// Question 7:
// You are given an object company with the following structure:
// const company = {
//   name: "Tech Solutions",
//   employees: [
//     {
//       name: "Alice",
//       position: "Developer",
//       contact: {
//         email: "alice@tech.com",
//         phone: "555-2345"
//       }
//     },
//     {
//       name: "Bob",
//       position: "Manager",
//       contact: {
//         email: "bob@tech.com",
//         phone: "555-6789"
//       }
//     }
//   ],
//   location: "New York"
// };
// Perform the following operations:
// 1.	Access the email of the second employee (Bob) and print it.
// 2.	Modify the phone number of Alice to “555-1111”.
// 3.	Add a new property department with the value “Engineering” to the first employee (Alice).
// 4.	Delete the location property from the company object.

const company = {
    name: "Tech Solutions",
    employees: [
      {
        name: "Alice",
        position: "Developer",
        contact: {
          email: "alice@tech.com",
          phone: "555-2345"
        }
      },
      {
        name: "Bob",
        position: "Manager",
        contact: {
          email: "bob@tech.com",
          phone: "555-6789"
        }
      }
    ],
    location: "New York"
  }

  console.log(company);
  console.log(company.employees['1'].contact.email);
  console.log(company.employees['0'].contact.phoner=["555-1111"]);
  console.log(company.employees['0'].department=["Engineering"]);
  delete company.location;
  console.log(company);