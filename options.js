function save_options() {
  var identity = document.getElementById('identity').value;
  chrome.storage.sync.set({
    identity: identity
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

document.getElementById('save').addEventListener('click',
    save_options);