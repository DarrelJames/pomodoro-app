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
}
