<template>
  <q-btn :color="color" no-caps rounded v-bind="$attrs" v-on="$listeners">
    <slot v-for="(_, name) in $slots" :name="name" :slot="name" />
  </q-btn>
</template>

<script>
export default {
  name: "e-btn",
  props: {
    color: {
      type: String
    }
  }
};
</script>
