class SessionsAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/sessions'
  }

  getSessions() {
    return fetch(this.baseUrl).then( resp => resp.json())
  }
}
