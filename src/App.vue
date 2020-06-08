<template>
  <v-app>
    <v-content>
      <v-container>
        <div class="d-flex flex-column">
          <table-header />
          <table-content />
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import TableHeader from "./components/Table/Header"
  import TableContent from "./components/Table/Content";

  export default {
    name: 'App',
    components: {
      TableContent,
      TableHeader
    }
  }
</script>
