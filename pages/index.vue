<template>
  <div>
    <h2>Home</h2>
    <p>Questo è un esempio di portale vetrina dove trovare diverse tipologie di prodotto. </p>
    <p>In questa viedata Possiamo vedere un esempio di layout che per la pagina prodotto sarà diverso</p>
    <p>Ho cercato di creare una semplice app mobile desktop dova da una chiamata api fetch() recupero dei dati da mostrare all'utente.</p>
    <p>Nella sezione Product sarà possibile vedere la lista dei prodotti e dei dettagli</p>
    <button v-if="!show" @click="show = !show" class="btn">
      Mostra Testo nascosto
    </button>
    <p v-if="show"> Testo inserito: {{ addText }}</p>
    <button v-if="show" @click="show = !show" class="btn">
      Nascondi Testo
    </button>
  </div>
</template>

<script setup>
const addText = useState('addText', () => 'Questo è un esempio di testo inserito con hook di useState');
const show = ref(false)

</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}
</style>