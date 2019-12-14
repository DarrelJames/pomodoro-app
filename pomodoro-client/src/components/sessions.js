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
    this.sessionContainer.addEventListener('click', this.handleClick.bind(this))
  }

  handleClick(e) {
    e.preventDefault()

  }
  createSession() {
    const value = new Date()

    return this.adapter.createSession(value).then(session => {
      const newSession = new Session(session.data)

      this.sessions.push(newSession)
      this.render()
      return newSession
    })
  }

  updateSession(obj) {
    this.adapter.updateSession(obj).then(() => this.render())
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
