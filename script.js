// Write your JavaScript code here!

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();

      let pilotInput = document.querySelector("input[name=pilotName]");
      let pilot = pilotInput.value;
      let pilotTest = Number(pilot);

      let copilotInput = document.querySelector("input[name=copilotName]");
      let copilot = copilotInput.value;
      let copilotTest = Number(copilot);

      let fuelInput = document.querySelector("input[name=fuelLevel]");
      let fuelInputTest = fuelInput.value;

      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let cargoMassInputTest = cargoMassInput.value;

      if (pilotInput.value === "" || copilotInput.value === "" || fuelInputTest.value === "" || cargoMassInputTest.value === "") {
         alert("All fields are required!");
         //event.preventDefault();
      } else if (isNaN(pilotTest) === false || isNaN(copilotTest) === false || isNaN(fuelInputTest) || isNaN(cargoMassInputTest)) {
         alert("Invalid Input!");
         //event.preventDefault();
      }

      document.querySelector('div[id=faultyItems]').style.visibility = "visible";

      pilotStatus.innerHTML = `${pilotInput.value} Ready`;
      copilotStatus.innerHTML = `${copilotInput.value} Ready`;

      if (fuelInput.value < 10000){
         fuelStatus.innerHTML = `Not enough fuel for the journey!`;
         launchStatus.innerHTML = `Shuttle not ready for launch`
         launchStatus.style.color = 'red';
      } else if (cargoMassInput > 10000){
         cargoStatus.innerHTML = `Too much mass for shuttle to take off`;
         launchStatus.innerHTML = `Shuttle not ready for launch!`
         launchStatus.style.color = 'red';
      } else {
         launchStatus.innerHTML = `Shuttle is ready for launch!`
         launchStatus.style.color = 'green';
      }

      










   });

   
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
