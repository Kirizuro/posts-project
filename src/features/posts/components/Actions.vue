<template>
  <v-container>
    <v-content>
      <v-flex wrap text-center>
        <router-link to="/">
          <v-btn class="btn" color="primary" dark>Home</v-btn>
        </router-link>
        <router-link to="/post/create">
          <v-btn class="btn" color="secondary" dark>Criar novo Post</v-btn>
        </router-link>
      </v-flex>
    </v-content>
  </v-container>
</template>

<script>
export default {
  name: "PostActions"
};
</script>

<style lang="scss">
.btn {
  margin: 5px;
}
</style>
