function vote(seriesId) {
  var voteCountElement = document.getElementById(seriesId);
  var votePopup = document.getElementById("votePopup");

  // Update vote count
  var currentVotes = parseInt(voteCountElement.innerText);
  voteCountElement.innerText = (currentVotes + 1) + " votes";

  // Display vote popup
  votePopup.style.display = "block";
  setTimeout(function() {
    votePopup.style.display = "none";
  }, 2000);
}