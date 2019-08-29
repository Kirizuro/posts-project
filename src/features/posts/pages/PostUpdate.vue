<template>
  <v-container>
    <v-layout>
      <v-flex>
        <input v-model="postTitle" :value="this.data.title" />
        <input v-model="postBody" :value="this.data.body" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  computed: {
    postId() {
      return this.$router.currentRoute.params.id;
    }
  },

  method: {
    async updatePost() {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${this.postId}`
      );
      const data = res.data;
      axios.put(`https://jsonplaceholder.typicode.com/posts/${this.postId}`, {
        userId: data.userId,
        id: data.id,
        title: this.postTitle,
        body: this.postBody
      });
    }
  }
};
</script>
