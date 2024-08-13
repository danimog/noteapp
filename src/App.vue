<script setup lang="ts">
  import { myNoteStore } from './stores/noteStores';
  import {ref, computed} from 'vue';

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
<h1>MyNOTEAPP</h1>
<h3>Inserisci nota</h3>

<textarea
      rows="5"
      cols="40"
      v-model="newNote"
      @keyup.enter="creaNota"
      placeholder="Add a new Note"
    />
    <ul>
      <li v-for="note in notes" :key="note.id">
        <input type="checkbox" :checked="note.done" @change="isDone(note)" />&nbsp;&nbsp;
        <strike v-if="note.done == true" >{{ note.titolo }}</strike>&nbsp;&nbsp;
        <span v-else>{{ note.titolo }}</span>&nbsp;&nbsp;
        <button @click="cancellaNota(note)"> X </button>
      </li>
    </ul>

</template>

<style scoped>

li{
  list-style: none;
}

</style>
