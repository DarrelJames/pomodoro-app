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
    // debugger
    if (e.target.className === "open-button") {
      e.target.style.display = "none"
      e.target.nextElementSibling.style.display = "block"
    }

    if (e.target.className === "btn cancel") {
      e.target.parentElement.parentElement.previousElementSibling.style.display = "block"
      e.target.parentElement.parentElement.style.display = "none"
    }
  }
  createSession() {
    const value = new Date()

    return this.adapter.createSession(value).then(session => {
      const newSession = new Session(session)

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
        return sessions.forEach(session => {
          this.sessions.push(new Session(session))
        })
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
