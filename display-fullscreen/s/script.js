function myFunction() {
    var x = document.getElementById("demo");
    x.style.fontSize = "25px"; 
    x.style.color = "red"; 
  }

        if (navigator.serviceWorker.controller) {
  console.log('[PWA Builder] active service worker found, no need to register')
} else {
  navigator.serviceWorker.register('sw.js', {
    scope: './'
  }).then(function(reg) {
    console.log('Service worker has been registered for scope:'+ reg.scope);
  });
}

let installButton = document.createElement('button');

let prompt;
window.addEventListener('beforeinstallprompt', function(e){
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  prompt = e;
});

installButton.addEventListener('click', function(){
   prompt.prompt();
})