<template>
  <div class="q-py-xl q-px-xl e-card">
    <h3 class="e-card-title">
      {{ title }}
    </h3>
    <p class="e-card-subtitle">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
      consequatur quae ullam ea, soluta assumenda, quaerat mollitia molestias,
      dolorum earum culpa suscipit perspiciatis autem iure voluptatum id odit
      magni aperiam?
    </p>
  </div>
</template>

<script>
export default {
  name: "e-card",
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.e-card {
  width: 30vw;
  height: 40vh;
  border: 1px blue solid;
  &-title {
    color: purple;
  }
  &-subtitle {
    color: red;
  }
}
</style>
