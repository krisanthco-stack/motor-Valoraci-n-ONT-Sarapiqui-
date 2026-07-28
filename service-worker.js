const CACHE_NAME = "motor-ont-v29-ui-1.1.0";
const PRECACHE = ["./", "./index.html", "./expediente.html", "./terreno.html", "./construcciones.html", "./obras.html", "./resumen.html", "./informe.html", "./catalogos.html", "./auditoria.html", "./manifest.webmanifest", "./assets/css/app.css", "./assets/css/tokens.css", "./assets/js/config.js", "./assets/js/data-v29.js", "./assets/js/audit-v29.js", "./assets/js/core/numbers.js", "./assets/js/core/validation.js", "./assets/js/core/logger.js", "./assets/js/core/storage.js", "./assets/js/core/state.js", "./assets/js/core/catalogs.js", "./assets/js/core/files.js", "./assets/js/engine/land-engine.js", "./assets/js/engine/ross-engine.js", "./assets/js/engine/summary-engine.js", "./assets/js/ui/shell.js", "./assets/js/ui/forms.js", "./assets/js/ui/item-table.js", "./assets/js/pages/home.js", "./assets/js/pages/expediente.js", "./assets/js/pages/terreno.js", "./assets/js/pages/construcciones.js", "./assets/js/pages/obras.js", "./assets/js/pages/resumen.js", "./assets/js/pages/informe.js", "./assets/js/pages/catalogos.js", "./assets/js/pages/auditoria.js", "./assets/icons/icon-192.png", "./assets/icons/icon-512.png"];
self.addEventListener("install",event=>event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(PRECACHE)).then(()=>self.skipWaiting())));
self.addEventListener("activate",event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET")return;
  const isNavigation=event.request.mode==="navigate";
  if(isNavigation){
    event.respondWith(fetch(event.request).then(response=>{
      const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy));return response;
    }).catch(()=>caches.match(event.request).then(x=>x||caches.match("./index.html"))));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{
    if(response.ok){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy));}
    return response;
  })));
});
