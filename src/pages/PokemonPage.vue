<template>
    <div>
        <h1>Quien es este pokemon?</h1>
        <PokemonPicture :pokemonId="4" :showPokemon="true" />
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
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
});
</script>

<style></style>
