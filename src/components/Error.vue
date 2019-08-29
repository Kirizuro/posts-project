<template>
  <v-container>
    <v-flex>
      <span class="error">Erro 404</span>
    </v-flex>
    <v-flex>
      <router-link to="/">
        <v-btn class="btn" color="green darken-1" dark>Voltar</v-btn>
      </router-link>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: "Error"
};
</script>

<style lang="scss">
</style>