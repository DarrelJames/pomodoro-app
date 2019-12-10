class Session {
  constructor(sessionJSON) {
    this.id = sessionJSON.id
    this.date = new Date(sessionJSON.attributes.date)
    this.start_time = new Date(sessionJSON.attributes.start_time)
    this.end_time = new Date(sessionJSON.attributes.end_time)
    this.notes = sessionJSON.relationships.notes.data
  }

  renderLi() {
    return `
    <li>
      <div class="card">
      ${this.start_time.toLocaleTimeString()}
      ${this.end_time.toLocaleTimeString()}
      ${this.date.toDateString()}
      </div>
    </li>`
  }
}
