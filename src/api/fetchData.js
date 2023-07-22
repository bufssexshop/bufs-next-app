const defaultHost = process.env.API_URL || 'http://localhost:8000'

export async function fetchData (path, method = 'POST', body = {}) {
  const res = await fetch(`${defaultHost}/${path}`,
    {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  )
  const data = await res.json()
  return data
}

export async function getData (path) {
  const res = await fetch(`${defaultHost}/${path}`)
  const data = await res.json()
  return data
}
