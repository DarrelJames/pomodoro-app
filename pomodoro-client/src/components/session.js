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
      <p>${this.start_time.toLocaleTimeString()}</p>
      <p>${this.end_time.toLocaleTimeString()}</p>
      <p>${this.date.toDateString()}</p>
      </div>
    </li>`
  }
}
