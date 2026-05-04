
function toggleFact() {
    const fact = document.getElementById("fact");
    fact.hidden = !fact.hidden;
}

// Toggle Venus fact visibility
function toggleVenusFact() {
    const fact = document.getElementById("venusFact");
    fact.hidden = !fact.hidden;
}

function showInfo(planet) {
    const popup = document.getElementById("popup");
    const text = document.getElementById("popup-text");

    if (planet === "mercury") {
        text.innerHTML = "Mercury is the closest planet to the Sun and has extreme temperature variations.";
    }
    if (planet === "venus") {
        text.innerHTML = "Venus is the hottest planet due to its thick toxic atmosphere.";
    }
    if (planet === "earth") {
        text.innerHTML = "Earth is the only planet known to support life, with a diverse range of ecosystems.";
    }
    if (planet === "mars") {
        text.innerHTML = "Mars is the Red Planet, known for its iron-rich surface.";
    }
    if (planet === "saturn") {
        text.innerHTML = "Saturn is famous for its stunning rings made of ice and rock particles.";
    }
    if (planet === "jupiter") {
        text.innerHTML = "Jupiter is the largest planet and has a giant storm called the Great Red Spot.";
    }
    if (planet === "uranus") {
        text.innerHTML = "Uranus rotates on its side, making it unique among the planets in our solar system.";
    }
    if (planet === "neptune") {
        text.innerHTML = "Neptune is the farthest planet from the Sun and has supersonic winds in its atmosphere.";
    }
      

    popup.style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
// Simple accessibility enhancement: keyboard focus logging
window.addEventListener("keydown", (e) => {
    console.log("Key pressed:", e.key);
});