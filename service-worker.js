const CACHE_NAME = "motor-ont-v29-ui-1.3.0";
const PRECACHE = ["./", "./index.html", "./expediente.html", "./terreno.html", "./construcciones.html", "./obras.html", "./resumen.html", "./informe.html", "./catalogos.html", "./auditoria.html", "./manifest.webmanifest", "./assets/branding/escudo-sarapiqui-reportes.jpg", "./assets/branding/escudo-sarapiqui-usuario.png", "./assets/branding/escudo-sarapiqui.png", "./assets/branding/bandera-sarapiqui.png"];
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
