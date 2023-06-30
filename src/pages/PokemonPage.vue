<template>
    <div>
        <h1>Quien es este pokemon?</h1>
        <PokemonPicture />
        <PokemonOptions />
    </div>
</template>

<script lang="ts">
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPicture from '@/components/PokemonPicture.vue';

export default {
  name: 'PokemonPage',
  components: {
    PokemonOptions,
    PokemonPicture,
  },
};
</script>

<style></style>
