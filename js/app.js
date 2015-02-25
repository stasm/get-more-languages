var buttons = document.querySelectorAll('li');

Array.prototype.forEach.call(buttons, function(elem) {
  elem.addEventListener('click', install);
});

function install() {
  var manifestUrl =
    window.location.origin + '/langpacks/' +
    this.dataset.version + '/' +
    this.dataset.lang + '.webapp';
  var req = navigator.mozApps.installPackage(manifestUrl);
  req.onerror = function() {
    alert(this.error.name);
  };
}
