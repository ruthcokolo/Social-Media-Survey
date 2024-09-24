// Check which page the user is on
const currentPage = window.location.pathname;

// Logic for the app-favourites-survey.html (Platform Selection Page)
if (currentPage.includes('app-favourites-survey.html')) {
  function submitSurvey(event) {
    // Prevent default form submission
    event.preventDefault();

    // Get the selected top-pick value
    const topPick = document.querySelector('select[name="top-pick"]:checked');
    
    // Redirect to result page with selected platform
    if (topPick) {
      window.location.href = `submitsurvey.html?top-pick=${topPick.value}`;
    }
  }

  // Attach submit function to form
  const submit = document.getElementById('submit');
  if (submit) {
    submit.addEventListener('submit', submitSurvey);
  }
}

// Logic for the submitsurvey.html (Thank You Page)
else if (currentPage.includes('submitsurvey.html')) {
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  // Get the top-pick parameter from the URL
  const topPick = getQueryParam("top-pick");
  const thankYouDiv = document.createElement('div');
  thankYouDiv.classList.add('thankyouMessage'); 

  
   // Check if the chosenApp is the default option
  if (topPick === 'Select your top pick' || !topPick) {
    thankYouMessage.innerHTML = `
      <h2>Thank You for Your Vote!</h2>
      <p>It seems there was an issue retrieving your selection. Please try again!</p>`;
  } else {
    thankYouMessage.innerHTML = `
      <h2>Thank You for Your Vote!</h2>
      <p>Wow! You chose <span>${topPick}</span> as your favorite platform! 🌟</p>
      <p>Your opinion is invaluable, and it's exciting to see so many people passionate about it!</p>
      <p>Keep exploring and sharing your experiences on <span>${topPick}</span>. It is a fantastic choice!</p>`;
  }

  // Append the message to the body
  document.body.appendChild(thankYouMessage);
}

      