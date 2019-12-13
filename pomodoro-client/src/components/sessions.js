class Sessions {
  constructor() {
    this.sessions = []
    this.initBindingsAndEventListeners()
    this.adapter = new SessionsAdapter()
    this.fetchAndLoadSession()
  }

  initBindingsAndEventListeners() {
    this.sessionForm = document.getElementById('new-session')
    this.sessionContainer = document.getElementById('session-container')
  }

  createSession() {
    const value = new Date()

    return this.adapter.createSession(value).then(session => {
      const newSession = new Session(session.data)

      this.sessions.push(newSession)
      this.render()
    })
  }

  updateSession(obj) {
    this.adapter.updateSession(obj)
  }

  fetchAndLoadSession() {
    this.adapter.getSessions()
      .then(sessions => {
        return sessions.data.forEach(session => this.sessions.push(new Session(session)))
      })
      .then(() => {
        this.render()
      })
  }

  render() {
    const sessionString = this.sessions.map(session => session.renderLi())

    this.sessionContainer.innerHTML = sessionString.join("")
  }
}
