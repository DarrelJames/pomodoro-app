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
      this.sessionId = e.target.parentElement.parentElement.parentElement.dataset.id

      this.adapter.createNote({sessionId: this.sessionId, noteContent }).then((note) => {
        app.sessions.sessions.find(e => {
          return e.id === parseInt(this.sessionId)
        }).notes.push(new Note(note))
        app.sessions.render()
      })
    }
  }
}
