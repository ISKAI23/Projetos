let notes = JSON.parse(localStorage.getItem("notesApp_v1")) || [];

let editState = {
  type: null,
  noteID: null,
  subID: null,
};

function save() {
  localStorage.setItem("notesApp_v1", JSON.stringify(notes));
}
