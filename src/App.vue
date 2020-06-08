<template>
  <v-app>
    <v-content>
      <v-container>
        <table-content />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import TableContent from "./components/Table/Content";

  export default {
    name: 'App',
    components: {
      TableContent
    }
  }
</script>
