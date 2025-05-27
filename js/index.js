/* add Year to footer*/
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = ` &#169; Volha Padlipskaya  ${thisYear}`;
footer.appendChild(copyright);

/* fetch API-10  */
//const API_KEY = "live_YCILmBYJjzb5DSVDBsj1xB9bYwJrPjxiIbP9pWqOZklrsShbHtWjtET4NG0abWpF";
// fetch(`https://api.thedogapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${API_KEY}`)
fetch(`https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10`)
    .then((response) => response.json())
    .then((dogs) => {
        console.log("Dogs:", dogs);
    dogs.forEach((dog) => {
        console.log("Dog info:", dog);
        console.log(`picture: ${dog.url}`);
        console.log(`size: ${dog.width}, ${dog.height} `);
        // console.log(`other: ${dog.breeds[0].name}`);
        
        const projectSection = document.getElementById("Project_10");
        const projectList = projectSection.querySelector("ul");
        const project = document.createElement("li");
        project.innerHTML = `<img src="${dog.url}" alt="Dog Photo" class="dogPhoto" />`;

        projectList.appendChild(project);
        });
    })
.catch((error) => console.error("Error", error));

/************************************************* */
//  async function fetchDog() {
//   const API_KEY =
//   "live_YCILmBYJjzb5DSVDBsj1xB9bYwJrPjxiIbP9pWqOZklrsShbHtWjtET4NG0abWpF";
//   const url = ` https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${API_KEY}`;
//   const response = await fetch(url);
//   if (!response.ok) throw new Error("not found");
//   try {
//     const dogs = await response.json();
//     console.log("API response:", dogs);

//     dogs.forEach((dog, index) => {
//       if (dog && dog.length > 0) {
//         console.log("API works");
//         console.log(dog.width);
//         console.log(dog.index);
//         console.log(dogs[2]);
//         // const breed = dogs.breeds[0];
//         // const origin = dogs.origin[0];
//         console.log("dog breed:", breed[0]);
//         console.log("dog origin:", origin);
//         // console.log(`dogs ${index + 1}`);
//         // console.log("name:", breed.name);
//         // console.log("origin:", breed.origin);
//         // console.log("temperament:", breed.temperament);

//       }
//     });

//     // return `this dog is ${breed.origin}`;
//   } catch (error) {
//     return `Error: ${error.message}`;
//   }
// }
// fetchDog();
        
//*********************************************************** */

