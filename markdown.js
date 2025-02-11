// 替换textarea为Quill编辑器
const quill = new Quill('#editor', {
    theme: 'snow',
    modules: {
        toolbar: [
            ['bold', 'italic', 'underline'],
            ['code-block'],
            [{ 'header': [1, 2, 3, false] }],
            ['link', 'image']
        ]
    }
});