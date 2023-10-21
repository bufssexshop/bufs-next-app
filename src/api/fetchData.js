const defaultHost = 'https://bufs-api.onrender.com' || process.env.NEXT_PUBLIC_API_URL

let token = ''

if (typeof window !== 'undefined') {
  token = localStorage.getItem('sexshop-token') || ''
}

export async function mutationData (path, method = 'POST', body = {}) {
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
  const res = await fetch(`${defaultHost}/${path}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  const data = await res.json()
  return data
}
