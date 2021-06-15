<template>
  <div class="q-py-xl q-px-xl e-card relative-position">
    <div class="absolute-top-right">
      <q-icon name="close" size="lg" @click="handleClick" />
    </div>
    <h3 class="e-card-title text-bold">
      {{ title }}
    </h3>
    <p class="e-card-paragh text-body1">
      {{ description }}
    </p>
    <p class="text-caption">
      {{ note }}
    </p>
    <div class="row q-col-gutter-y-md">
      <div class="col bg-red-1">1</div>
      <div class="col bg-red-2">2</div>
      <div class="col bg-red-3">3</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "e-card",
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    note: {
      type: String,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.$emit("closeCard");
    }
  }
};
</script>

<style lang="scss">
.e-card {
  min-height: 10vh;
  border: 1px blue solid;
  &-title {
    color: purple;
  }
  &-paragh {
    color: red;
  }
}
</style>
