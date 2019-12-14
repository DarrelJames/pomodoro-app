class Session {
  constructor(sessionJSON) {
    this.id = sessionJSON.id
    this.date = new Date(sessionJSON.attributes.date)
    this.end_time = sessionJSON.attributes.end_time ? new Date(sessionJSON.attributes.end_time) : null
    this.notes = sessionJSON.relationships.notes.data
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
        </div>
        <div>
          <button>Add Note</button>
        </div>
      </div>
    `
  }
}
