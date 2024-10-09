//Question 1
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num ** 2);
console.log(squaredNumbers); 

//Question 2
function getGrade(score) {
    return (score >= 90) ? 'A' :
           (score >= 80) ? 'B' :
           (score >= 70) ? 'C' :
           (score >= 60) ? 'D' :
           'F';
}
console.log(getGrade(95)); 
console.log(getGrade(85)); 
console.log(getGrade(75)); 
console.log(getGrade(65)); 
console.log(getGrade(55)); 

//Question 3
const car = {
    companyName: "Toyota",
    model: "Camry",
    year: 2020
};
function changeCarYear(newYear) {
    car.year = newYear;
}
changeCarYear(2023);
const { model, year } = car;
console.log(`Model: ${model}, Year: ${year}`);

//Question 4
function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true; 
}
const num = [2, 3, 4, 5, 10, 11, 13, 14, 15, 16];
const primeNumbers = numbers.filter(isPrime);
console.log(primeNumbers); 

//Question 5
//1. Map
//Transforming Data: Change the format of data. For example, converting an array of temperatures from Celsius to Fahrenheit.
const celsius = [0, 20, 30];
const fahrenheit = celsius.map(temp => (temp * 9/5) + 32);
//Extracting Properties: Create an array of specific properties from an array of objects.
const users = [{ name: 'Alice' }, { name: 'Bob' }];
const names = users.map(user => user.name);
//Creating UI Elements: Generate a list of UI components based on an array.
const items = ['Item 1', 'Item 2', 'Item 3'];
const listItems = items.map(item => `<li>${item}</li>`).join('');
//2. Filter
//Finding Specific Items: Extract items that meet certain criteria, such as finding all even numbers in an array.
const numeric = [1, 2, 3, 4, 5];
const evens = numbers.filter(num => num % 2 === 0);
//Filtering Objects: Select objects from an array based on property values, such as filtering users older than a certain age.
const user = [{ age: 18 }, { age: 25 }, { age: 30 }];
const adults = users.filter(user => user.age >= 21);
//Removing Duplicates: Create a unique array by filtering out duplicates (combined with other methods).
const numb = [1, 2, 2, 3, 4, 4];
const uniqueNumbers = numbers.filter((value, index, self) => self.indexOf(value) === index);
//3. Reduce
//Summing Values: Calculate the sum of all elements in an array.
const n = [1, 2, 3, 4];
const total = numbers.reduce((accumulator, current) => accumulator + current, 0);
//Counting Instances: Count occurrences of items in an array, such as counting the number of times each fruit appears.
const fruits = ['apple', 'banana', 'apple', 'orange'];
const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
//Flattening Arrays: Flatten nested arrays into a single array.
const nestedArrays = [[1, 2], [3, 4], [5]];
const flattened = nestedArrays.reduce((acc, curr) => acc.concat(curr), []);

//Question 6
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
fetchData();
const person = {
    name: "Madhuri Arjariya",
    address: {
        street: "123 Main St",
        city: "Allahabad",
        country: "india"
    },
    contact: {
        email: "madhuriarjariya@gmail.com",
    }
};
const phoneNumber = person.contact?.phone ?? "Phone number not available";

console.log(`Name: ${person.name}`);
console.log(`Address: ${person.address.street}, ${person.address.city}, ${person.address.country}`);
console.log(`Contact Email: ${person.contact?.email ?? "Email not available"}`);
console.log(`Phone Number: ${phoneNumber}`);

