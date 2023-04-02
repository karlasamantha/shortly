export const SHRTCODE_API: string = `https://api.shrtco.de/v2/shorten?url=`

export default async function request(query: string, options = {}) {
  const res = await fetch(`${SHRTCODE_API}${query}`, {
    ...options,
    method: 'GET'
  })
  return await res.json()
}
