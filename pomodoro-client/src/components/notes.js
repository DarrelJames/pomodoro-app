class Notes {
  constructor() {
    this.initBindingsAndEventListeners()
    this.adapter = new NotesAdapter()
  }

  initBindingsAndEventListeners() {
    this.sessionContainer = document.getElementById('session-container')
    this.sessionContainer.addEventListener('click', this.handleClick.bind(this))


  }

  handleClick(e) {
    e.preventDefault()
    // debugger

    if (e.target.className === "btn") {
      const noteContent = e.target.form.elements[0].value
      const sessionId = e.target.parentElement.parentElement.parentElement.dataset.id

      this.adapter.createNote({sessionId, noteContent}).then(() => {
        app.sessions.render()
      })
    }
  }
}
