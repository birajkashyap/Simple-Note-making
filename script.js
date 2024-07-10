document.addEventListener('DOMContentLoaded', () => {
    const addNoteButton = document.getElementById('addNote');
    const noteText = document.getElementById('noteText');
    const notesList = document.getElementById('notesList');

    addNoteButton.addEventListener('click', () => {
        const noteContent = noteText.value.trim();
        if (noteContent) {
            const noteElement = document.createElement('div');
            noteElement.classList.add('note');
            noteElement.innerHTML = `
                <p>${noteContent}</p>
                <button class="delete">X</button>
            `;
            notesList.appendChild(noteElement);
            noteText.value = '';

            const deleteButton = noteElement.querySelector('.delete');
            deleteButton.addEventListener('click', () => {
                notesList.removeChild(noteElement);
            });
        }
    });
});
