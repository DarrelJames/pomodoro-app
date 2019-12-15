class NotesAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/notes'
  }

  createNote(body) {

    const note = {
      content: body.noteContent
    }
    const noteCreateParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({note,
      session_id: body.sessionId})
    }
    return fetch(this.baseUrl, noteCreateParams).then(resp => resp.json())
  }


}
