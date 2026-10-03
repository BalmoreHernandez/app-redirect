// app.balmorehernandez.com se mudó a https://balmorehernandez.com/fitness/
// Este service worker reemplaza al viejo (fitness-principiantes-v13 y anteriores): borra todas las cachés de este
// dominio, se da de baja y recarga las pestañas abiertas, que entonces caen en la página de redirección.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil((async () => {
  const ks = await caches.keys();
  await Promise.all(ks.map(k => caches.delete(k)));
  await self.registration.unregister();
  const cs = await self.clients.matchAll({ type: "window" });
  cs.forEach(c => { try { c.navigate(c.url); } catch (err) {} });
})()));
