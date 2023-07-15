export const keepServerAlive = (interval) => {
  setInterval(() => {
    fetch('https://bufs-api.onrender.com/productos/getProducts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ categoria: 'lenceria' })
    })
  }, interval)
}
