<template>
  <AppTemplate>
    <Actions />
    <List />
  </AppTemplate>
</template>

<script>
import Actions from "../components/Actions";
import List from "../components/List";
import AppTemplate from "@/components/AppTemplate";

export default {
  name: "Home",
  components: {
    Actions,
    List,
    AppTemplate
  }
};
</script>
