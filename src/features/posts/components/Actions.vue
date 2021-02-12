<template>
  <v-container>
    <v-content>
      <v-flex class="pt-4" wrap text-center>
        <router-link to="create">
          <v-btn color="secondary" dark>Criar novo Post</v-btn>
        </router-link>
      </v-flex>
    </v-content>
  </v-container>
</template>

<script>
export default {
  name: 'PostActions'
};
</script>

<style lang="scss">
.btn {
  margin: 5px;
}
</style>
