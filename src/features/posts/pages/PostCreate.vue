<template>
  <AppTemplate>
    <v-content>
      <h1 class="pt-5">Crie sua postagem</h1>
      <v-card class="ma-6 pa-5">
        <v-flex>
          <v-text-field
            name="title"
            label="Titulo"
            :v-bind="title"
            :v-model="title"
          ></v-text-field>
        </v-flex>
        <v-flex>
          <v-text-field
            label="Corpo"
            name="body"
            textarea
            :v-model="body"
          ></v-text-field>
        </v-flex>
      </v-card>

      <v-btn
        @click="back()"
        @disabled="this.loading"
        class="mr-2"
        color="blue"
        dark
        >Voltar</v-btn
      >
      <v-btn @click="createPost()" color="success">Criar</v-btn>
    </v-content>
  </AppTemplate>
</template>

<script>
import AppTemplate from '@/components/AppTemplate.vue';
import axios from 'axios';

export default {
  name: 'Create',

  components: {
    AppTemplate
  },

  data() {
    return {
      title: '',
      body: '',
      loading: true
    };
  },

  methods: {
    back() {
      this.$router.go(-1);
    },

    async createPost() {
      if (!this.title || !this.body) alert('Preencha todos os dados!');
      try {
        const data = { title: this.title, body: this.body };
        await axios.post('https://jsonplaceholder.typicode.com/posts', data);
      } catch (error) {
        throw error;
      }

      this.$router.go(-1);
    }
  }
};
</script>
