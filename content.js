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
  const svgContent = `<svg fill="#ffffff" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.368 512.368" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M447.303,128.681c-0.427-1.259-0.875-3.264-1.408-5.525c-3.52-14.315-6.827-27.84-19.904-32.832l-62.08-23.616 c-12.032-4.565-25.515-2.923-36.139,4.48l-3.84,3.435c-3.115,3.563-7.339,8.021-10.347,10.88H199.197 c-2.539-2.667-5.931-6.592-8.768-10.112l-4.437-4.16c-10.624-7.424-24.149-9.131-36.117-4.523L87.73,90.324 c-13.013,4.949-16.277,18.325-19.755,32.512c-0.533,2.155-0.981,4.117-0.811,4.117c0,0,0.021,0,0.043-0.021 C46.045,168.66-54.606,379.902,39.623,442.26c13.483,8.917,31.424,7.509,43.691-3.456l73.856-66.219 c6.507-5.845,14.784-9.067,23.275-9.067h152.853c8.491,0,16.747,3.221,23.275,9.067l73.856,66.219 c6.955,6.229,15.616,9.408,24.277,9.408c6.955,0,13.888-2.069,19.883-6.293C557.746,383.572,482.823,202.494,447.303,128.681z M341.469,149.502c11.776,0,21.333,9.557,21.333,21.333c0,11.776-9.557,21.333-21.333,21.333s-21.333-9.557-21.333-21.333 S329.693,149.502,341.469,149.502z M213.469,256.169h-21.333v21.333c0,11.776-9.536,21.333-21.333,21.333 s-21.333-9.557-21.333-21.333v-21.333h-21.333c-11.797,0-21.333-9.557-21.333-21.333s9.536-21.333,21.333-21.333h21.333V192.17 c0-11.776,9.536-21.333,21.333-21.333s21.333,9.557,21.333,21.333v21.333h21.333c11.797,0,21.333,9.557,21.333,21.333 S225.266,256.169,213.469,256.169z M298.802,234.836c-11.776,0-21.333-9.557-21.333-21.333s9.557-21.333,21.333-21.333 s21.333,9.557,21.333,21.333S310.578,234.836,298.802,234.836z M341.469,277.502c-11.776,0-21.333-9.557-21.333-21.333 s9.557-21.333,21.333-21.333s21.333,9.557,21.333,21.333S353.245,277.502,341.469,277.502z M384.135,234.836 c-11.776,0-21.333-9.557-21.333-21.333s9.557-21.333,21.333-21.333s21.333,9.557,21.333,21.333S395.911,234.836,384.135,234.836z"></path> </g> </g> </g></svg>`;

  // Create a container for the SVG
  const alertButton = document.createElement("div");
  alertButton.id = "youtube-alert-button";
  alertButton.innerHTML = svgContent;
  alertButton.style.width = "30px"; // Adjust size as needed
  alertButton.style.height = "30px"; // Adjust size as needed
  alertButton.style.cursor = "pointer";
  alertButton.style.marginLeft = "20px"; // Space between mute button and alert button
  alertButton.style.marginRight = "20px"; // Space between mute button and alert button
  alertButton.style.display = "inline-flex";
  alertButton.style.alignItems = "center";
  alertButton.style.justifyContent = "center";
  alertButton.style.position = "relative";
  alertButton.style.top = "-10px"; // Adjust top position to center vertically

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
