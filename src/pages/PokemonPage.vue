<template>
  <h1 v-if="!pokemon">Cargando...</h1>
  <div v-else>
    <h1>Quien es este pokemon?</h1>
    <PokemonPicture :pokemonId="pokemon?.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemonArr="pokemonArr" @selection="checkAnswer(1, $event)" />
    <template v-if="showAnswer">
      <h2 class="fade-int">{{ message }}</h2>
      <button @click="newGame">Play Again!</button>
    </template>
  </div>
</template>

<script lang="ts">
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPicture from '@/components/PokemonPicture.vue';
import getPokemonOptions from '@/helpers/getPokemonOptions';
import Pokemon from '@/types/pokemonType';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PokemonPage',
  components: {
    PokemonOptions,
    PokemonPicture,
  },
  data() {
    return {
      pokemonArr: [] as Pokemon[],
      pokemon: null as Pokemon | null,
      showPokemon: false,
      showAnswer: false,
      message: '',
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rndInt];
    },
    checkAnswer(number: number, selectedId: string) {
      console.log(number);
      this.showPokemon = true;
      if (selectedId === this.pokemon?.id) {
        this.message = 'Correct Answer!';
      } else {
        this.message = `Ooops, it was ${this.pokemon?.name}`;
      }
      this.showAnswer = true;
    },
    newGame() {
      // reinitialize all
      this.pokemonArr = [] as Pokemon[];
      this.pokemon = null;
      this.showPokemon = false;
      this.showAnswer = false;
      this.mixPokemonArray();
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
});
</script>

<style></style>
