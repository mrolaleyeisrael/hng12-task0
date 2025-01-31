// Function to display current UTC time
function displayUTCTime() {
  const now = new Date();
  const utcTime = now.toUTCString();
  document.querySelector('[data-testid="currentTimeUTC"]').textContent = `Current UTC Time: ${utcTime}`;
}

// Update time on page load
displayUTCTime();