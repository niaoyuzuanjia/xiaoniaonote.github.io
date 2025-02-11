// 使用Firebase实现数据同步
const db = firebase.firestore();
function saveNote() {
    db.collection('notes').doc(currentNote.id).set({
        content: currentNote.content,
        updatedAt: new Date()
    });
}