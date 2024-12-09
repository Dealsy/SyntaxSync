type FetchDocArgs = {
  collection: string
  slug?: string
  draft?: boolean
  where?: Record<string, unknown>
}

export async function fetchDoc({ collection, slug, draft = false, where = {} }: FetchDocArgs) {
  try {
    const baseUrl = process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000'
    const queryParams = new URLSearchParams()

    if (draft) queryParams.append('draft', 'true')
    if (Object.keys(where).length) queryParams.append('where', JSON.stringify(where))
    if (slug) queryParams.append('slug', slug)

    const url = `${baseUrl}/api/${collection}?${queryParams}`
    const res = await fetch(url)
    const data = await res.json()

    return data.docs
  } catch (error) {
    console.error('Error fetching document:', error)
    return []
  }
}
