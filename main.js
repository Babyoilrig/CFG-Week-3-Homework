const showFactsButton = document.getElementById("show-facts-button");

// showFactsButton.addEventListener("click", showFacts());

function showFacts() {
    console.log("I have been clicked!");
    var factsContainer = document.getElementById("factsContainer");
    if (factsContainer.style.display === "none") {
      factsContainer.style.display = "block";
    } else {
      factsContainer.style.display = "none";
    }
  }

  //This isn't working atm - need to append child??
  //Also on page the load the image is really big for some reason