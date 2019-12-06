class Sessions {
  constructor() {
    this.sessions = []
    this.initBindingsAndEventListeners()
    this.adapter = new SessionsAdapter()
    this.fetchAndLoadNote()
  }

  initBindingsAndEventListeners() {
    this.sessionForm = document.getElementById('new-session')
    this.sessionContainer = document.getElementById('session-container')
  }

  fetchAndLoadNote() {
    this.adapter.getSessions()
      .then(sessions => {
        return sessions.data.forEach(session => this.sessions.push(session))
      })
      .then(() => {
        this.render()
      })
  }

  render() {
    this.sessionContainer.innerHTML = 'sessions going here'
  }
}
