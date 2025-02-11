const deletedNotes = [];
function deleteNote(noteId) {
    const index = notes.findIndex(n => n.id === noteId);
    if (index !== -1) {
        deletedNotes.push(notes[index]);
        notes.splice(index, 1);
    }
}