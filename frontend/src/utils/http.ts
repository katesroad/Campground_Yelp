const BASE_URL = process.env.REACT_APP_API_URL as string

export interface Request extends RequestInit {
  endpoint: string
  data?: unknown
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  retry?: number
}

export default async function client(request: Request): Promise<unknown> {
  const { method = 'GET', endpoint, data, headers = {} } = request
  const config: RequestInit = {
    method,
    credentials: 'include',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
  }
  if (method !== 'GET' && data) {
    config.body = JSON.stringify(data)
  }

  return window
    .fetch(`${BASE_URL}/${endpoint}`, config)
    .then(async (response) => {
      const data = await response.json()
      if (response.ok) {
        return data
      }
      // config the endpoint as the path based on your needs
      if (response.status === 401 && request.retry === 0) {
        request.retry = 1
        const tokenRenewed = await client({
          endpoint: 'auth/token',
          method: 'GET',
        })
          .then(() => true)
          .catch(() => false)
        if (tokenRenewed) return client(request)
        else return Promise.reject(data)
      } else {
        return Promise.reject(data)
      }
    })
}
