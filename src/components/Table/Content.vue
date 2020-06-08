<template>
  <v-data-table
    :headers="headers"
    :items="data"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
        color="white"
      >
        <v-btn
          color="teal accent-4"
          dark
          @click="addItem"
        >
          <v-icon class="mr-2">
            mdi-plus
          </v-icon>
          Создать новый товар
        </v-btn>
        <add-item-dialog />
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import AddItemDialog from "./Dialogs/AddItem";

  export default {
    name: 'TableContent',
    components: {
      AddItemDialog
    },
    data() {
      return {
        headers: [
          {
            text: 'Артикул',
            value: 'artnumber'
          },
          {
            text: 'Название товара',
            value: 'name'
          },
          {
            text: 'Бренд',
            value: 'brand'
          },
          {
            text: 'Вес',
            value: 'weight'
          },
          {
            text: 'Фасовка',
            value: 'quantity'
          },
          {
            text: 'Цена',
            value: 'price'
          },
          {
            text: 'Наличие',
            value: 'stock'
          },
          {
            value: 'actions',
            sortable: false
          }
        ]
      }
    },
    computed: {
      ...mapState({
        data: state => state.table.data
      })
    },
    created() {
      this.setData()
    },
    methods: {
      ...mapActions({
        setData: 'table/setData',
        setDialogAddItem: 'dialogs/setAdd'
      }),
      addItem() {
        this.setDialogAddItem(true)
      },
      editItem(item) {
        console.log(item)
        //  todo: open edit item dialog
      },
      deleteItem(item) {
        //  todo: open delete item dialog
        console.log(item)
      }
    }
  }
</script>