// Function to add the alert button overlay
function addAlertButton() {
  console.log("Attempting to add alert button...");

  // Check if the button already exists to avoid duplicates
  if (document.getElementById("youtube-alert-button")) {
    return;
  }

  // Find the control bar (this might change depending on YouTube's structure, so inspect to confirm the class)
  const controls = document.querySelector(".ytp-right-controls");
  if (!controls) {
    return;
  }

  // SVG code for a game controller
  const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="gaming">
  <path fill="#393b44" d="M31.05,26.2l-.34-1.01c-.53-1.59,.02-3.35,1.36-4.36,.84-.63,1.01-1.83,.38-2.67-.62-.83-1.52-1.4-2.53-1.6-1.07-.22-2.06-.81-2.54-1.8-.58-1.2-.4-2.56,.45-3.55l2.75-3.21c.36-.42,.99-.47,1.41-.11h0c.42,.36,.47,.99,.11,1.41l-2.75,3.21c-.3,.35-.38,.81-.23,1.24s.52,.73,.97,.81c1.44,.24,2.72,.96,3.67,2.05,1.46,1.68,1.29,4.49-.49,5.82-.66,.49-.93,1.35-.67,2.13l.34,1.01-1.9,.63Z"></path>
  <path fill="#8d93ab" d="M35,25.89c0-.55-.45-1-1-1h-4c-.55,0-1,.45-1,1v6h6v-6Z"></path>
  <path fill="#393b44" d="M61.58,48.14l-6.38-17.52c-1.2-3.29-4.31-5.5-7.74-5.5h-2.26c-2.81,0-5.49,1.38-7.17,3.71-.71,.98-1.83,1.57-3.02,1.57h-5.91c-1.23,0-2.41-.61-3.16-1.63-1.67-2.28-4.33-3.65-7.11-3.65h-2.4c-3.37,0-6.42,2.17-7.6,5.41L2.42,48.14c-.79,2.16-.45,4.54,.89,6.39,2.74,3.75,6.78,1.93,10.03,.46,.04-.02,.07-.04,.11-.06l5.07-3.1c1.63-.99,3.49-1.52,5.38-1.52h16.2c1.89,0,3.75,.53,5.38,1.52l5.09,3.11c2.29,1.33,4.17,2.17,5.83,2.17,1.59,0,2.97-.76,4.29-2.58,1.34-1.84,1.68-4.23,.89-6.39Z"></path>
  <path fill="#d6e4e5" d="M24,35.89h-2v-2c0-1.85-1.15-3-3-3s-3,1.15-3,3v2h-2c-1.85,0-3,1.15-3,3s1.15,3,3,3h2v2c0,1.85,1.15,3,3,3s3-1.15,3-3v-2h2c1.85,0,3-1.15,3-3s-1.15-3-3-3Z"></path>
  <circle cx="45" cy="33.89" r="3" fill="#3db2ff"></circle>
  <circle cx="45" cy="43.89" r="3" fill="#4e944f"></circle>
  <circle cx="50" cy="38.89" r="3" fill="#e94560"></circle>
  <circle cx="40" cy="38.89" r="3" fill="#fec260"></circle>
  <rect width="8" height="2" x="28" y="44" fill="#f79327" rx="1" ry="1"></rect>
</svg>

  `;

  // Create a container for the SVG
  const alertButton = document.createElement("div");
  alertButton.id = "youtube-alert-button";
  alertButton.innerHTML = svgContent;
  alertButton.style.width = "30px"; // Adjust size as needed
  alertButton.style.height = "30px"; // Adjust size as needed
  alertButton.style.cursor = "pointer";
  alertButton.style.marginLeft = "10px"; // Space between mute button and alert button
  alertButton.style.marginRight = "10px"; // Space between mute button and alert button
  alertButton.style.display = "inline-flex";
  alertButton.style.alignItems = "center";
  alertButton.style.justifyContent = "center";
  alertButton.style.position = "relative";
  alertButton.style.top = "-14px"; // Adjust top position to center vertically

  // Add click event to show an alert
  alertButton.addEventListener("click", () => {
    console.log("Alert button clicked!");

    // Get the current YouTube URL
    const currentUrl = window.location.href;

    // Replace "https://www.youtube.com/" with "https://www.thegoodgametheory.com/"
    const modifiedUrl = currentUrl.replace(
      "https://www.youtube.com/",
      "https://www.thegoodgametheory.com/"
    );

    // Open the modified URL in a new tab
    window.open(modifiedUrl, "_blank");
  });

  // Add the button to the control bar
  controls.insertBefore(alertButton, controls.firstChild);
}

const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    if (
      mutation.type === "childList" &&
      document.querySelector(".html5-video-player")
    ) {
      addAlertButton();
      break;
    }
  }
});

// Start observing the document for changes
observer.observe(document.body, { childList: true, subtree: true });