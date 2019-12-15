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
    this.sessionContent = document.getElementById('modal-content')
    this.modal = document.getElementById('myModal')
    this.modal.addEventListener('click', this.handleModal.bind(this))
    window.addEventListener('click', e => this.handleModal(e))
  }

  handleModal(e) {

    if (e.target == this.modal) {
      this.modal.style.display = "none";
    }
    if (e.target.tagName === "SPAN") {
      this.modal.style.display = "none";
    }

  }
  handleClick(e) {
    e.preventDefault()
    if (e.target.className === "open-button") {
      e.target.style.display = "none"
      e.target.nextElementSibling.style.display = "block"
    }

    if (e.target.className === "btn cancel") {
      e.target.parentElement.parentElement.previousElementSibling.style.display = "block"
      e.target.parentElement.parentElement.style.display = "none"
    }

    if (e.target.className === "card") {
      const session = this.sessions.find(session => session.id === parseInt(e.target.dataset.id))

      this.sessionContent.innerHTML = session.renderShow()
      this.modal.style.display = "block"
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
