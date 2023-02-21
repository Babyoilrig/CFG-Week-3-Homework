const showFactsButton = document.getElementById("show-facts-button");

showFactsButton.addEventListener("click", showFacts());

function showFacts() {
    var factsContainer = document.getElementById("factsContainer");
    if (factsContainer.style.display === "none") {
      factsContainer.style.display = "block";
    } else {
      factsContainer.style.display = "none";
    }
  }