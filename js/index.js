/* add Year and my name to footer*/
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = ` &#169; Volha Padlipskaya  ${thisYear}`;
footer.appendChild(copyright);
/**************************************************/

const API_KEY =
  "live_YCILmBYJjzb5DSVDBsj1xB9bYwJrPjxiIbP9pWqOZklrsShbHtWjtET4NG0abWpF";    
const apiDog10 = `https://api.thedogapi.com/v1/images/search?limit=10&order=RANDOM`;
const apiDogSpitz = `https://api.thedogapi.com/v1/images/search?limit=10&breed_ids=111&api_key=${API_KEY}`;
const apiDog = `https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1&api_key=${API_KEY}`;
//const apiDog = `https://api.thedogapi.com/v1/breeds`;
//const apiDog10 = 'https://api.thedogapi.com/v1/images/search';

/* Hidden other section exept Project_10 (Showes 10 pictures of the dogs) */
Project_10.style.display = "";
Project_1.style.display = "none";
Project_Spitz.style.display = "none";
Project_guess.style.display = "none";

/* fetch API-10 - Select 10 random photo of the dogs. Appear when you open the project*/
/*API choice for images*/
fetch(apiDog10)
  .then((response) => response.json())
  .then((dogs) => {
    console.log("Dogs:", dogs);
    console.log("url:", dogs[0].url);
      /* refresh a page*/
      // projectList.innerHTML = "";
    dogs.forEach((dog) => {
      console.log("Dog info:", dog);
      console.log(`picture: ${dog.url}`);

      const projectSection = document.getElementById("Project_10");
      const projectList = projectSection.querySelector("ul");
      const project = document.createElement("li");
      project.innerHTML = `<img src="${dog.url}" alt="Dog Photo" class="dogPhoto" />`;
      //project.innerHTML = `<p> ${dog.name} </p>`
      projectList.appendChild(project);
    });
  })
  .catch((error) => console.error("Error", error));
/************************************************/

//   /* Click button Gallery - to come back to the Home page  */
document.getElementById("homeButton").addEventListener("click", function () {
  /* Hidden other section exept Project_10 (Showes 10 pictures of the dogs) */
  Project_10.style.display = "";
  Project_1.style.display = "none";
  Project_Spitz.style.display = "none";
  Project_guess.style.display = "none";
})
/************************************************ */

/* API choice 1 random dog and info about this dog*/
/* Click button Make a choice - showes 1 random picture with info about this breed */
document.getElementById("choiceButton").addEventListener("click", function () {
  Project_10.style.display = "none";
  Project_1.style.display = "";
  Project_Spitz.style.display = "none";
  Project_guess.style.display = "none";

/* fetch API-1 - Select 1 dog with info about*/
  fetch(apiDog)
    .then((response) => response.json())
    .then((breeds) => {
      console.log("array:", breeds);
      breeds.forEach((breed) => {
        console.log(`pict: ${breed.breeds[0].url}`);
        //  console.log(`name: ${breed.breeds[0].name}`);
        //  console.log(`life: ${breed.breeds[0].life_span}`);
        //  console.log(`temp: ${breed.breeds[0].temperament}`);
        //  console.log(`for: ${breed.breeds[0].bred_for}`);
        //  console.log(`group: ${breed.breeds[0].breed_group}`);
        //  console.log(`weight: ${breed.breeds[0].weight.imperial}`);
        //  console.log(`height: ${breed.breeds[0].height.imperial}`);

        const projectSection = document.getElementById("Project_1");
        const projectList = projectSection.querySelector("ul");

        const name = document.createElement("h3");
        const pic = document.createElement("li");
        const life = document.createElement("p");
        const weight = document.createElement("p");
        const height = document.createElement("p");
        const b_group = document.createElement("p");
        const b_for = document.createElement("p");
        const temp = document.createElement("p");
        /* refresh a page*/
        projectList.innerHTML = "";
        name.innerHTML = `<h5> ${breed.breeds[0].name} </h5>`;
        pic.innerHTML = `<img src="${breed.url}" alt="Dog Photo" class="dogPhoto1" />`;
        life.innerHTML = `<p> <span>years of life:</span> ${breed.breeds[0].life_span} </p>`;
        weight.innerHTML = `<p> <span>weight:</span> ${breed.breeds[0].weight.imperial} (lb)</p>`;
        height.innerHTML = `<p> <span>height:</span> ${breed.breeds[0].height.imperial} (in)</p>`;
        b_group.innerHTML = `<p><span>breed group:</span> ${breed.breeds[0].breed_group}</p>`;
        b_for.innerHTML = `<p><span>breed for:</span> ${breed.breeds[0].bred_for}</p>`;
        temp.innerHTML = `<p> <span>description of temperament:</span> ${breed.breeds[0].temperament} </p>`;
        
        projectList.appendChild(name);
        projectList.appendChild(pic);
        projectList.appendChild(life);
        projectList.appendChild(weight);
        projectList.appendChild(height);
        projectList.appendChild(b_group);
        projectList.appendChild(b_for);
        projectList.appendChild(temp);
      });
    })
    .catch((error) => console.error("Error", error));
});
/**************************************************/

/* Click button Finnish Spitz - to show 10 random pictures of the only Finnish Spitz breed */
document.getElementById("onlySpitzButton").addEventListener("click", function () {
  /* Hidden other section exept Project_10 (Showes 10 pictures of the Finnish Spitz breed) */
  Project_10.style.display = "none";
  Project_1.style.display = "none";
  Project_Spitz.style.display = "";
  Project_guess.style.display = "none";

    /*fetch Select only breed = Finnish Spitz, breed_id=111 */
    fetch(apiDogSpitz)
      .then((response) => response.json())
      .then((dogs) => {
        const projectSection = document.getElementById("Project_Spitz");
        const projectList = projectSection.querySelector("ul");
        /* refresh a page*/
        projectList.innerHTML = "";
        dogs.forEach((dog) => {
          console.log("array:", dog);
          //console.log(`breed: ${dog.breeds[0].name}`);
          console.log(`breed_id: ${dog.breeds[0].id}`);
          const picture = document.createElement("li");
          //const dogName = document.createElement("p")
          picture.innerHTML = `<img src="${dog.url}" alt="Dog Photo" class="dogPhoto" />`;
          //dogName.innerHTML = `<p> ${dog.breeds[0].name} </p>`
          //projectList.appendChild(dogName);
          projectList.appendChild(picture);
        });
      })
      .catch((error) => console.error("Error", error));
});
/**************************************************/

//fetch GuessWho
/*shows a card with a description of the breed. 
You can try to guess. If you don't know, you can click on the hint - the link to see a photo of the dog
If you still don't know which breed was described, you can click on the button and see the bread */
document.getElementById("guessButton").addEventListener("click", function () {
  Project_10.style.display = "none";
  Project_1.style.display = "none";
  Project_Spitz.style.display = "none";
  Project_guess.style.display = "";

  fetch(apiDog)
    .then((response) => response.json())
    .then((dogs) => {
      dogs.forEach((dog) => {
        const projectSection = document.getElementById("Project_guess");
        const projectList = projectSection.querySelector("ul");
        projectList.innerHTML = "";
        const describe = document.createElement("p");
        const url = document.createElement("a");
        const breed = document.createElement("p");
        /*I covered the string to all small letters, because the info received from APIDog
         is stored in all wordswith a capital letters */
      
        describe.innerHTML =
          ` This dog is for ${dog.breeds[0].bred_for} and has ${dog.breeds[0].temperament} temperament... `.toLowerCase();
        breed.innerHTML = `<h3> ${dog.breeds[0].name} </h3>`;
        url.innerHTML = `<a href="${dog.url}" target="_blank">Click here to see a picture</a>`;
        // projectList.innerHTML = "";
        
        projectList.appendChild(describe);
        projectList.appendChild(breed);
        projectList.appendChild(url);
        projectList.appendChild(url).setAttribute("id", "linkGues");

        /*After clicking on the button, the name of the breed appears*/
        document
          .getElementById("but_submit")
          .addEventListener("click", function () {
            projectList.appendChild(breed).style.display = "";
          });
        /*At start - the name of the breed is hidden*/
        projectList.appendChild(breed).style.display = "none";
      });
    })
    .catch((error) => console.error("Error", error));
});
