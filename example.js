const companies = [
  {
    name: "Company One",
    category: "Finance",
    start: 1981,
    end: 2003,
  },
  {
    name: "Company Two",
    category: "Retail",
    start: 1992,
    end: 2008,
  },
  {
    name: "Company Three",
    category: "Auto",
    start: 1999,
    end: 2010,
  },
  {
    name: "Company Four",
    category: "Retail",
    start: 1989,
    end: 2015,
  },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//Normal looping
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

//1 foreach
companies.forEach(function (company) {
  console.log(company);
});

// using arrow func/ES6

companies.forEach((company) => console.log(company));


//2 filter - allows us to filer out things from the array

let candDrink = [];
for (i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    candDrink.push(ages[i]);
  }
}
console.log(candDrink);

const canDrink1 = ages.filter((age) => {
  if (age >= 21) {
    return true;
  }
});
console.log(canDrink1);
// this can even be made better using ES6

const candDrink2 = ages.filter((age) => age >= 21);
console.log(candDrink2);

// More Retails
const retailCompanies = companies.filter(function (company) {
  if (company.category === "Retails") {
    return true;
  }
});
console.log(retailCompanies);

//Using arrow functions
const retailCompanies2 = companies.filter(
  (company) => company.category === "Retails"
);
console.log(retailCompanies2);

// Let's try and filter out companies that strted in the 1980s
const eightiesCompanies = companies.filter(
  (company) => company.start >= 1980 && company.start < 1990
);

console.log(eightiesCompanies);

// get companies that lasted 10 years or more

const lastTenYears = companies.filter(
  (company) => company.end - company.start >= 10
);
console.log(lastTenYears);

// 2  Map
// Works a bit differently, instead of just filtering  things out, we could create new arrays from the current one
// Create new array of company names

//Ex1
const companyNames = companies.map(function (company) {
  return company.name;
});
console.log(companyNames);
// Shorter way

const testMap = companies.map(
  (company) => `${company.name} [${company.start} - ${company.end}]`
);

console.log(testMap);

//ex 2
const ageSquare = ages.map((age) => Math.sqrt(age));
console.log(ageSquare);

const agesTimesTwo = ages.map((age) => age * 2);
console.log(ageSquare);

// To join 2 map functions together
const ageMap = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);

console.log(ageMap);

// 3 sort
// Works similar like others but basically takes in 2 values
const sortedCompanies = companies.sort(function (c1, c2) {
  if (c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});
console.log(sortedCompanies);

// shorter form of above
const sortedCompanies2 = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

console.log(sortedCompanies2);


// Sorting the ages
const sortAges = ages.sort((a,b) => a -b); // ascending order
console.log(sortAges);

// const sortAges = ages.sort((a,b) => a -b); // descending order
// console.log(sortAges);


// reduce - Can be used for quite a lot of things and could get complicated, in this section we'll be reducing the no of content in the age array by adding them together

// illustration 1 using for loop

// let ageSum = 0;
// for (let i =0; i < ages.length; i++) {
//   ageSum = ageSum + ages[i];
// }
// console.log(ageSum);

// using reduce function
const ageSum = ages.reduce(function(total, age) {
  return total + age;
}, 0)

console.log(ageSum);


// Making it even smaller by using ES6 arrow functions

const ageSum1 = ages.reduce((total,age) => total + age, 0);

console.log(ageSum1)


// Get total years for all company
const totalYear = companies.reduce(function(total, years) {
  return total + (years.end - years.start) 
},0)

console.log(totalYear);

// using arrow function
const totalYear2 = companies.reduce((total, years) => total + (years.end - years.start) ,0)

console.log(totalYear2)