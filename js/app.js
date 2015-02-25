document.getElementById('install-fr-2.2').onclick = function() {
  install(window.location.origin + '/langpacks/2.2/fr.webapp');
};

document.getElementById('install-fr-3.0').onclick = function() {
  install(window.location.origin + '/langpacks/3.0/fr.webapp');
};

function install(manifestUrl) {
  var req = navigator.mozApps.installPackage(manifestUrl);
  req.onerror = function() {
    alert(this.error.name);
  };
}
