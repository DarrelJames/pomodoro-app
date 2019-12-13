class Session {
  constructor(sessionJSON) {
    this.id = sessionJSON.id
    this.date = new Date(sessionJSON.attributes.date)
    this.end_time = new Date(sessionJSON.attributes.end_time)
    this.notes = sessionJSON.relationships.notes.data
  }

  get start_time() {
    return this.date.toLocaleTimeString()
  }
  renderLi() {
    return `
    <li>
      <div class="card">
      <p>${this.start_time}</p>
      <p>${this.end_time.toLocaleTimeString()}</p>
      <p>${this.date.toDateString()}</p>
      </div>
    </li>`
  }
}
