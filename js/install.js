var installBtn = document.getElementById('install-app');

if (installBtn) {

  installBtn.style.display = 'none';

  if (navigator.mozApps) {

    installBtn.addEventListener('click', function() {
      navigator.mozApps.install(window.location.origin + '/manifest.webapp');
    }, false);

    var req = navigator.mozApps.getSelf();
    req.onsuccess = function() {
      if (!req.result) {
        installBtn.style.display = 'block';
      }
    };

  }
}
