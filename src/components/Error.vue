<template>
  <v-alert prominent type="success">{{ text }}</v-alert>
</template>

<script>
export default {
  name: 'Error',
  props: ['text', 'dismiss']
};
</script>
