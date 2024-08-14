<script setup lang="ts">
import { myNoteStore } from "./stores/noteStores";
import { ref, computed } from "vue";

const testonota = ref("testo della nota");
const noteStore = myNoteStore();

const notes = computed(() => noteStore.note);
const newNote = ref("");

const creaNota = () => {
  if (newNote.value.trim() !== "") {
    noteStore.creaNota(newNote.value);
    newNote.value = "";
  }
};
const isDone = (note) => noteStore.isDone(note);
const cancellaNota = (note) => noteStore.cancellaNota(note);

// function cambiaTesto(submitEvent) {
//   console.log("cambio il testo")
//     testonota.value = submitEvent.target.elements.nota.value;
//  }
</script>

<template>
  <!-- <div class="myapp"> -->
  <h1>MyNOTEAPP</h1>
  <!-- <h3>Inserisci nota</h3> -->

  <input
    style="display: block;"
    type="text"
    class="my-5"
    v-model="newNote"
    @keyup.enter="creaNota"
    placeholder="Aggiungi una nota.."
  />
  <!-- <ul>
    <li v-for="note in notes" :key="note.id">
      <input
        type="checkbox"
        :checked="note.done"
        @change="isDone(note)"
      />&nbsp;&nbsp; <strike v-if="note.done == true">{{ note.titolo }}</strike
      >&nbsp;&nbsp; <span v-else>{{ note.titolo }}</span
      >&nbsp;&nbsp;
      <button
        type="button"
        class="btn btn-xs btn-icon btn-outline-danger"
        @click="cancellaNota(note)"
      >
        <svg class="icon icon-danger">
          <use
            href="../node_modules/bootstrap-italia/dist/svg/sprites.svg#it-delete"
          ></use>
        </svg>
      </button>
    </li>
  </ul> -->
  <!--start card-->
  <div v-for="note in notes" :key="note.id">
    <div class="card-wrapper border border-rounded blocco">
      <div class="card">
        <div class="card-body">
          <h3 class="card-title h5">
            <input type="checkbox" :checked="note.done" @change="isDone(note)"/>

            &nbsp;&nbsp; <strike v-if="note.done == true">{{ note.titolo }}</strike
      >&nbsp;&nbsp; <span v-else>{{ note.titolo }}</span
      >&nbsp;&nbsp;
          </h3>
          <p class="card-text font-serif">
            <button
        type="button"
        class="btn btn-xs btn-icon btn-outline-danger"
        @click="cancellaNota(note)"
      >
        <svg class="icon icon-danger">
          <use
            href="../node_modules/bootstrap-italia/dist/svg/sprites.svg#it-delete"
          ></use>
        </svg>
      </button>
          </p>
        </div>
      </div>
    </div>
  </div>
  <!--end card-->
</template>

<style scoped>
li {
  list-style: none;
}
</style>
