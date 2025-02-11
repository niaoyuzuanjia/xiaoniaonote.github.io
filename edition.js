// 在note对象中添加版本历史
const note = {
    id: Date.now(),
    content: '',
    history: [],
    createdAt: new Date()
};

function saveVersion(note) {
    note.history.push({
        content: note.content,
        savedAt: new Date()
    });
}