let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    showInstallButton();
});

function showInstallButton() {
    const installButton = document.getElementById('install-button');
    installButton.style.display = 'block';
    
    window.addEventListener('appinstalled', () => {
        deferredPrompt = null;
        installButton.style.display = 'none';
    });
    
    installButton.addEventListener('click', () => {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then();
    });
}
