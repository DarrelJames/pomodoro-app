class Note {
  constructor(noteJSON) {
    this.id = noteJSON.id
    this.content = noteJSON.attributes.content
  }
}
