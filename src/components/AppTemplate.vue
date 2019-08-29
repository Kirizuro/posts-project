<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="text-uppercase">
        <v-flex lg5>
          <span class="font-weight-light"
            >Claudio de Oliveira Almeida Junior</span
          >
        </v-flex>
        <v-flex justify-end lg6>
          <a class="font" href="https://github.com/Kirizuro" target="_blanked">
            <font-awesome-icon :icon="['fab', 'github']" size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/claudio-de-oliveira-almeida-junior-3a6a75136/"
            target="_blanked"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" />
          </a>
        </v-flex>
      </v-toolbar-title>
    </v-app-bar>
    <slot></slot>
  </v-app>
</template>

<script>
export default {
  name: "Template"
};
</script>
