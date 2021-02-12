<template>
  <AppTemplate>
    <v-content>
      <v-card class="ma-4 pa-7" wrap align-center>
        <v-flex lg4 sm12>
          <v-text-field
            name="titulo"
            label="Titulo"
            :value="post.title"
            :loading="loaded"
            readonly
          >
          </v-text-field>
        </v-flex>
        <v-flex sm12>
          <v-text-field
            name="body"
            label="Corpo"
            :value="post.body"
            :loading="loaded"
            readonly
            textarea
            height="50"
          >
          </v-text-field>
        </v-flex>
      </v-card>

      <v-btn color="blue" dark @click="back()">Voltar</v-btn>
      <!-- <v-btn @click="deletePost()" color="delete"></v-btn> -->
    </v-content>
  </AppTemplate>
</template>

<script>
import axios from 'axios';

import AppTemplate from '@/components/AppTemplate.vue';

export default {
  name: 'Details',
  components: {
    AppTemplate
  },

  data() {
    return {
      postId: this.$router.currentRoute.params.id,
      post: {
        title: '',
        body: ''
      },
      loaded: true
    };
  },

  methods: {
    back() {
      this.$router.go(-1);
    },

    deletePost() {
      axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.postId}`);
      this.$router.go(-1);
    },

    async getPost() {
      try {
        const post = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${this.postId}`
        );

        const { title, body } = post.data;
        this.post = {
          title: title,
          body: body
        };
        this.loaded = false;
      } catch (error) {
        return error;
      }
    }
  },

  created() {
    this.getPost();
  }
};
</script>
