let cities = [
    { name: "New York", population: 18.65e6 },
    { name: "Cairo", population: 18.82e6 },
    { name: "Mumbai", population: 19.32e6 },
    { name: "São Paulo", population: 20.88e6 },
    { name: "Mexico City", population: 21.34e6 },
    { name: "Shanghai", population: 23.48e6 },
    { name: "Delhi", population: 25.87e6 },
    { name: "Tokyo", population: 37.26e6 }
]; 
let sum = 0;
for (let city of cities) {
    sum = sum + city.population;
}
console.log(typeof sum);
console.log(sum)

let neww = sum.toString();
console.log(typeof neww);
console.log(neww);