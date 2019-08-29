<template>
  <AppTemplate>
    <v-container wrap text-center>
      <v-layout>
        <v-flex lg6>
          <v-input v-model="postTitle" :value="post.title" />
        </v-flex>
        <h3>tes</h3>
        {{ postId }}
        <v-flex lg6>
          <v-input v-model="postBody" :value="post.body" />
        </v-flex>
        <v-btn @click="deletePost()" color="delete"></v-btn>
      </v-layout>
    </v-container>
  </AppTemplate>
</template>

<script>
import axios from "axios";

import AppTemplate from "@/components/AppTemplate.vue";

export default {
  name: "Details",
  components: {
    AppTemplate
  },

  computed: {
    postId() {
      return this.$router.currentRoute.params.id;
    }
  },
  methods: {
    deletePost() {
      axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.postId}`);
      this.$router.go(-1);
    },

    async getPost() {
      try {
        const pos = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${this.postId}`
        );
        return (this.post = pos);
      } catch (error) {
        return error;
      }
    }
  }
};
</script>
