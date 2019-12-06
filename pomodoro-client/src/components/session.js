class Session {
  constructor(sessionJSON) {
    this.id = sessionJSON.id
    this.date = sessionJSON.attributes.date
    this.start_time = sessionJSON.attributes.start_time
    this.end_time = sessionJSON.attributes.end_time
    this.notes = sessionJSON.relationships.notes.data
  }
}
