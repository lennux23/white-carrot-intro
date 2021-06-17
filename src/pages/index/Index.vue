<template>
  <!--   <q-page class="flex justify-evenly items-center">
    <e-card title="Titulo 1" />
    <e-card v-bind:title="tituloSegundo" />
    <e-card title="Titulo 3" />
  </q-page> -->
  <q-page class="row items-center q-col-gutter-md">
    <div
      class="col-12 col-sm-6 col-md-4"
      v-for="(card, index) in cards"
      :key="index"
    >
      <e-card
        :title="card.title"
        :description="card.description"
        :note="card.note"
      >
        <template v-slot:icon-close>
          <q-icon name="close" size="lg" @click="deleteCard(index)"
        /></template>
      </e-card>
    </div>
    <e-card
      title="Titulo Estatico"
      description="Desc estático"
      note="Nota Estatica"
    >
      <template v-slot:content>
        <img src="https://cdn.quasar.dev/img/parallax2.jpg" alt="" />
        <h3>Hola</h3>
      </template>
    </e-card>
    <div class="flex flex-center">
      <e-btn label="Que onda" @click="metodoQueOnda" color="primary" />
    </div>
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
      cards: [
        {
          title: "Titulo 1",
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
      consequatur quae ullam ea, soluta assumenda, quaerat mollitia molestias,
      dolorum earum culpa suscipit perspiciatis autem iure voluptatum id odit
      magni aperiam?`,
          note: "Nota 1"
        },
        {
          title: "Titulo 2",
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
      consequatur quae ullam ea, soluta assumenda, quaerat mollitia molestias,
      dolorum earum culpa suscipit perspiciatis autem iure voluptatum id odit
      magni aperiam?`,
          note: "Nota 2"
        },
        {
          title: "Titulo 3",
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
      consequatur quae ullam ea, soluta assumenda, quaerat mollitia molestias,
      dolorum earum culpa suscipit perspiciatis autem iure voluptatum id odit
      magni aperiam?`,
          note: "Nota 3"
        }
      ],
      tituloSegundo: "Titulo 2021"
    };
  },
  methods: {
    deleteCard(indexToDelete) {
      let cardsFiltered = this.cards.filter((el, ind) => {
        if (ind != indexToDelete) {
          return el;
        }
      });
      this.cards = cardsFiltered;
    },
    metodoQueOnda() {
      alert("que onda");
    }
  }
};
</script>
