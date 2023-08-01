const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log("hello");

// Interpolated
console.log("Hello, I am a %s string", "interpolated")

// Styled
console.log("%c I am some great text", "font-size: 50px; color: red; text-shadow: 10px 10px 0 blue;");

// warning!
console.warn("OH NOOO");


// Error :|
console.error("Shit!");

// Info
console.info("At 4,000 pounds per square inch, the saltwater crocodile of northern Africa has the strongest bite of any living animal.")

// Testing
const p =document.querySelector("p");

console.assert(p.classList.contains('ouch'), "That is wrong!");

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();
// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`)
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);

});


// counting

console.count("hi")
console.count("hi")
console.count("hi")
console.count("hi")
console.count("hi")
console.count("hi")


// timing
console.time("fetching data");
fetch("https://api.github.com/users/chuma-beep")
 .then(data => data.json())
 .then(data => {
  console.timeEnd("fetching data");
  console.log(data);
 });

 //table
 console.table(dogs)