const timeElement = document.querySelector('#time');

(function updateTime() {
  const time = new Date(Date.now());
  console.log(typeof time);
  timeElement.innerHTML = `现在是 ${time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}`;

  setTimeout(updateTime, 1000);
})();
