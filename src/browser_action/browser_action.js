document.addEventListener('DOMContentLoaded', function() {
  var wikitranslateButton = $("button#wikitranslate-button")[0];
  wikitranslateButton.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
      wikitranslateButton.textContent = "translating.."
      d = document;
      $.getJSON('https://api.ipify.org?format=json', function(data) {
        alert(data.ip);
      });

 
    });
  }, false);
}, false);