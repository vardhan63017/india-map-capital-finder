function updateState(stateName, imagePath, detailsText) {
  document.getElementById("stateDetails").innerText = detailsText;

  let imgElement = document.createElement("img");
  imgElement.src = imagePath;
  imgElement.style.width = "200px";
  imgElement.style.margin = "10px";

  let stateImagesDiv = document.getElementById("stateImages");
  stateImagesDiv.innerHTML = ""; // Clear previous images
  stateImagesDiv.appendChild(imgElement);
}
