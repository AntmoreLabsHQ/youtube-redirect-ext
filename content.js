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
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="gaming">
  <path fill="#FFFFFF" d="M55.2,30.24c-1.2-3.29-4.31-5.5-7.74-5.5h-2.26c-2.81,0-5.49,1.38-7.17,3.71-.71,.98-1.83,1.57-3.02,1.57h-.02v-4.5c0-.55-.45-1-1-1h-1.28l-.11-.33c-.26-.79,.03-1.64,.7-2.15,1.7-1.3,2.04-3.73,.75-5.45-.97-1.29-2.37-2.14-3.96-2.41-.45-.08-.81-.38-.97-.81s-.07-.89,.23-1.24l2.75-3.21c.36-.42,.31-1.05-.11-1.41h0c-.42-.36-1.05-.31-1.41,.11l-2.67,3.11c-.73,.85-1.06,2.01-.75,3.09,.35,1.25,1.34,2.13,2.6,2.34,1.08,.18,2.03,.76,2.69,1.63s.39,2.06-.45,2.73c-1.21,.95-1.73,2.52-1.36,4h-.64c-.55,0-1,.45-1,1v4.49c-1.19-.03-2.33-.63-3.05-1.62-1.67-2.28-4.33-3.65-7.11-3.65h-2.4c-3.37,0-6.42,2.17-7.6,5.41L2.42,47.76c-.79,2.16-.45,4.54,.89,6.39,2.74,3.75,6.78,1.93,10.03,.47l.11-.06,5.07-3.1c1.63-.99,3.49-1.52,5.38-1.52h16.2c1.89,0,3.75,.53,5.38,1.52l5.09,3.11c2.29,1.33,4.17,2.17,5.83,2.17,1.59,0,2.97-.76,4.29-2.58,1.34-1.84,1.68-4.23,.89-6.39l-6.38-17.52Zm-22.2-.23h-2v-3.5h2v3.5Zm26.08,22.96c-1.63,2.23-2.94,2.52-7.48-.12l-5.07-3.1c-1.94-1.19-4.16-1.81-6.42-1.81H23.9c-2.26,0-4.48,.63-6.42,1.81l-5.02,3.07c-3.59,1.61-5.89,2.42-7.54,.16-.95-1.3-1.19-3-.63-4.52l6.42-17.62c.89-2.45,3.19-4.09,5.72-4.09h2.4c2.15,0,4.2,1.06,5.5,2.83,1.12,1.53,2.9,2.45,4.77,2.45h5.91c1.82,0,3.56-.9,4.64-2.4,1.3-1.8,3.37-2.88,5.54-2.88h2.26c2.59,0,4.94,1.68,5.86,4.19l6.38,17.52c.56,1.53,.32,3.22-.63,4.52Z"></path>
  <path fill="#FFFFFF"  d="M24 35.51h-2v-2c0-1.85-1.15-3-3-3s-3 1.15-3 3v2h-2c-1.85 0-3 1.15-3 3s1.15 3 3 3h2v2c0 1.85 1.15 3 3 3s3-1.15 3-3v-2h2c1.85 0 3-1.15 3-3s-1.15-3-3-3zm0 4h-3c-.55 0-1 .45-1 1v3c0 .74-.26 1-1 1s-1-.26-1-1v-3c0-.55-.45-1-1-1h-3c-.74 0-1-.26-1-1s.26-1 1-1h3c.55 0 1-.45 1-1v-3c0-.74.26-1 1-1s1 .26 1 1v3c0 .55.45 1 1 1h3c.74 0 1 .26 1 1s-.26 1-1 1zM45 36.51c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM45 40.51c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM50 35.51c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM43 38.51c0-1.65-1.35-3-3-3s-3 1.35-3 3 1.35 3 3 3 3-1.35 3-3zm-3 1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path>
  <rect width="8" height="2" x="28" y="43.62" rx="1" ry="1"></rect>
</svg>`;

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
      "https://www.gameyoutube.com/"
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
