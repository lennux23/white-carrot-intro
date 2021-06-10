<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      Esto es un header
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer>
      Esto es un footer
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {};
  }
};
</script>
