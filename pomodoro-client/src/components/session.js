class Session {
  constructor(sessionJSON) {
    this.id = sessionJSON.id
    this.date = new Date(sessionJSON.date)
    this.end_time = sessionJSON.end_time ? new Date(sessionJSON.end_time) : null
    this.notes = sessionJSON.notes ? sessionJSON.notes : []
  }

  get start_time() {
    return this.date.toLocaleTimeString()
  }
  renderLi() {
    return `

      <div class="card" data-id="${this.id}">
        <div class="card-info">
          <p>Date: ${this.date.toDateString()}</p>
          <p>Start Time: ${this.start_time}</p>
          <p>End Time: ${this.end_time ? this.end_time.toLocaleTimeString():"Not Stopped Yet"}</p>
          <p>Notes: ${this.notes.length}</p>
        </div>

        <button class="open-button">Add Note</button>
        <div class="form-popup">
          <form class="form-container">
            <label for="content"><b>Note</b></label>
            <textarea placeholder="Enter Note" name="content"></textarea>
            <button type="submit" class="btn">Add Note</button>
            <button type="submit" class="btn cancel">Close</button>
          </form>
        </div>
      </div>
    `
  }

  sessionNotesLi() {
    return this.notes.map(note => `<li> ${note.content}</li>`).join("")
  }

  renderShow() {
    return `
      <div class="modal-header">
        <span class="close">&times;</span>
        <h2>Session Title</h2>
      </div>
      <div class="modal-body">        
        <p>Date: ${this.date.toDateString()}</p>
        <p>Start Time: ${this.start_time}</p>
        <p>End Time: ${this.end_time ? this.end_time.toLocaleTimeString():"Not Stopped Yet"}</p>
        <h3>Notes:</h3>
        <ul>
          ${this.sessionNotesLi()}
        </ul>
      </div>
    `
  }
}
