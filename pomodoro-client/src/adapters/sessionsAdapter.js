class SessionsAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/sessions'
  }

  getSessions() {
    return fetch(this.baseUrl).then(resp => resp.json())
  }

  createSession(body) {
    const session = {
      date: body
    }
    const sessionCreateParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({session})
    }
    return fetch(this.baseUrl, sessionCreateParams).then(resp => resp.json())
  }

  updateSession(session) {
    const sessionUpdateParams = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({session})
    }
    return fetch(`${this.baseUrl}/${session.id}`, sessionUpdateParams).then(resp => resp.json())
  }
}
