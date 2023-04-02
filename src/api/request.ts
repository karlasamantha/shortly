const URL: string = `https://api.shrtco.de/v2/shorten?url=`

export default async function request(query: string, options = {}) {
  const res = await fetch(`${URL}${query}`, {
    ...options,
    method: 'GET'
  })
  return await res.json()
}