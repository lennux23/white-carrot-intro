<template>
  <q-page class="flex flex-center">
    <btn-de-muestra class="q-mr-sm" />
    <!-- xs, sm, md, lg-->
    <btn-de-muestra class="q-mr-sm" />
    <btn-de-muestra class="q-mr-sm" />
    <btn-de-muestra class="q-mr-sm" />
    <btn-de-muestra />
  </q-page>
</template>

<script>
import BtnDeMuestra from "src/components/Btn";
export default {
  name: "PageIndex",
  components: {
    BtnDeMuestra
  }
};
</script>
