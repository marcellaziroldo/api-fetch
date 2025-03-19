import axios from "axios";

const data = [
  { name: "apple" },
  { name: "orange" },
  { name: "bread" },
  { name: "pasta" },
  { name: "lettuce" },
];

const content = document.getElementById("content");

const li = `<li>hello ${data[0].name}</li>`;
const liTwo = `<li>hello ${data[1].name}</li>`;
const liThree = `<li>hello ${data[2].name}</li>`;

content.innerHTML = li + liTwo + liThree;


/*const data = axios.get()

async function getData() {
  const data = await axios.get("https://world.openfoodfacts.org/api/v0/product/3017620422003.json",);
  
}

console.log("third");
console.log(data.data);





/*async function getData() {
    const url = "https://world.openfoodfacts.org/api/v0/product/3017620422003.json";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }*/
