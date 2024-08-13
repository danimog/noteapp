import { defineStore } from "pinia";

export const myNoteStore = defineStore({

    id: "note",
    state: () => ({
        note: JSON.parse(localStorage.getItem("note")) || [],
    }),
    actions: {
        persistToLocalStorage() {
            localStorage.setItem("note", JSON.stringify(this.note));
        },

        creaNota(titolo) {
            this.note.push({id: Date.now(), titolo, done: false });
            this.persistToLocalStorage();
        },
        isDone(note) {
            note.done = !note.done;
            this.persistToLocalStorage();
        },
        cancellaNota(note) {
            this.note = this.note.filter((t) => t.id !== note.id)
            this.persistToLocalStorage();
        }    },
 
});