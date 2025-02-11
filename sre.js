function searchNotes(query) {
    return notes.filter(note => 
        note.content.includes(query) || 
        note.tags.some(tag => tag.includes(query))
    );
}