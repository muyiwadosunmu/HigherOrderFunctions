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

const candDrink2 = ages.filter(age => age >= 21);
console.log(candDrink2);

// More Retails
const retailCompanies = companies.filter(function(company) {
  if (company.category === 'Retails') {
    return true;
  }
});
console.log(retailCompanies)

//Using arrow functions
const retailCompanies2 =companies.filter(company => company.category === "Retails");
console.log(retailCompanies2)

// Let's try and filter out companies that strted in the 1980s
const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

console.log(eightiesCompanies)


// get companies that lasted 10 years or more

const lastTenYears = companies.filter(company => (company.end - company.start >= 10));
console.log(lastTenYears);

// 2  Map
// Works a bit differently, instead of just filtering  things out, we could create new arrays from the current one
// Create new array of company names

//Ex1
const companyNames = companies.map(function(company) {
  return company.name;
});
console.log(companyNames);
// Shorter way

const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

console.log(testMap);

//ex 2
const ageSquare = ages.map(age => Math.sqrt(age));
console.log(ageSquare);

const agesTimesTwo = ages.map(age => age * 2);
console.log(ageSquare);




// sort
// reduce