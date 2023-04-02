import request, { SHRTCODE_API } from '../request'

const MOCK_RESPONSE = {
  ok: true,
  result: {
    code: 'KCveN',
    short_link: 'shrtco.de/KCveN',
    full_short_link: 'https://shrtco.de/KCveN',
    short_link2: '9qr.de/KCveN',
    full_short_link2: 'https://9qr.de/KCveN',
    share_link: 'shrtco.de/share/KCveN',
    full_share_link: 'https://shrtco.de/share/KCveN',
    original_link: 'http://example.org/very/long/link.html'
  }
}

describe('request', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  it('should return a JSON containing ShrtcodeResponse object if successful request', async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      Promise.resolve({
        json: () => MOCK_RESPONSE
      })
    })
  })

  it('should not be able to change to a POST request', async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({})
      })
    )

    const query = 'https://www.testurl.com'
    const expectedUrl = `${SHRTCODE_API}${query}`
    const options = { method: 'POST' }

    await request(query, options)
    expect(global.fetch).toHaveBeenCalledWith(expectedUrl, { method: 'GET' })
  })
})
