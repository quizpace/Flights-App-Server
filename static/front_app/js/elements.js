// swip hand icon repet GIF animation.
document.addEventListener("DOMContentLoaded", function () {
  function reloadGif() {
    var container = document.getElementById("elements-container");
    var img = document.createElement("img");
    img.src = "/static/front_app/img/swip.gif";
    img.className = "swip-icon";
    img.id = "swip-icon";
    img.onload = function () {
      container.appendChild(img);
      setTimeout(function () {
        container.removeChild(img);
        reloadGif(); // Reload GIF after it has been removed
      }, img.duration || 5000); // Default to 1000ms if duration is not available
    };
  }

  reloadGif(); // Initial call to start the process
});

// switch ads sentences
document.addEventListener("DOMContentLoaded", function () {
  // List of sentences
  var sentences = [
    "Unlock the skies and explore boundless horizons with SkySweep <br /> your passport to global adventures.",
    "Elevate your journey to new heights with SkySweep <br /> where every destination is within reach.",
    "Embark on a world of endless possibilities with SkySweep <br /> where your dream destinations await.",
    "Discover the world at your fingertips with SkySweep <br /> where every flight is an opportunity to soar.",
    "From bustling metropolises to serene landscapes, SkySweep connects you to destinations far and wide.",
    "Fly beyond borders and embrace the freedom of exploration with SkySweep <br /> your gateway to the world.",
    "Dream, book, and fly with ease <br /> SkySweep makes global travel effortless and exhilarating.",
    "Jet set with confidence and convenience <br /> SkySweep empowers you to navigate the skies with ease.",
    "Unleash your wanderlust with SkySweep <br /> where every journey is a seamless adventure.",
    "Experience the joy of discovery with SkySweep <br /> where every flight is an invitation to wanderlust.",
  ];

  // Select a random sentence
  var randomIndex = Math.floor(Math.random() * sentences.length);
  var randomSentence = sentences[randomIndex];

  // Update the content of the <h4> element
  document.getElementById("switch-ads-sentences").innerHTML = randomSentence;
});
