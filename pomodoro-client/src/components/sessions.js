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
