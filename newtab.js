chrome.storage.sync.get(['identity'], (result) => {
  const identity = result.identity;

  let username;
  if (identity === 'mom') {
    username = '凌玲';
  } else {
    username = '姜震海';
  }
  
  document.querySelector('#username').innerHTML = username;
});

const timeElement = document.querySelector('#time');

(function updateTime() {
  const time = new Date(Date.now());
  timeElement.innerHTML = `现在是 ${time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}`;

  setTimeout(updateTime, 1000);
})();
