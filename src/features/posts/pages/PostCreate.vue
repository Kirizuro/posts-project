<template>
  <v-container wrap>
    <v-layout>
      <v-flex>
        <h3>teste</h3>
        <input type="text" v-model="postTitle" placeholder="Titulo" />
        <textarea
          v-model="postBody"
          cols="30"
          rows="10"
          placeholder="Corpo do Post"
        ></textarea>
        <v-btn @click="createPost()" value="submit"></v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Create",

  methods: {
    async createPost() {}
  }
};
</script>
