<template>
  <h1 v-if="!pokemon">Cargando...</h1>
  <div v-else>
    <h1>Quien es este pokemon?</h1>
    <PokemonPicture :pokemonId="pokemon?.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemonArr="pokemonArr" />
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
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rndInt];
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
});
</script>

<style></style>
