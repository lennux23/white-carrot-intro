<template>
  <q-page class="flex justify-evenly items-center">
    <e-card title="Titulo 1" />
    <e-card :title="tituloSegundo" />
    <e-card title="Titulo 3" />
  </q-page>
</template>

<script>
import ECard from "src/components/ECard.vue";
export default {
  name: "PageIndex",
  components: {
    ECard
  },
  data() {
    return {
      tituloSegundo: "Titulo 2021"
    };
  }
};
</script>
