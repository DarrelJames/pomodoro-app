class SessionsAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/sessions'
  }

  getSessions() {
    return fetch(this.baseUrl).then(resp => resp.json())
  }

  createSession(body) {
    const sessionCreateParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        body
      })
    }
    return fetch(this.baseUrl, sessionCreateParams).then(resp => resp.json())
  }
}
