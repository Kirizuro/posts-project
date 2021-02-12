<template>
  <v-container>
    <v-layout justify-space-around wrap>
      <v-flex class="ma-7" lg5 v-for="post in posts" :key="post.id">
        <v-card outlined>
          <router-link :to="{ name: 'post', params: { id: post.id } }">
            <v-card-title>{{ post.title }}</v-card-title>
          </router-link>
          <v-card-text>{{ post.body }}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "PostList",
  data() {
    return {
      posts: [],
      errors: []
    };
  },

  async created() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    // console.log(response.data);
    this.posts = response.data;
  }
};
</script>
