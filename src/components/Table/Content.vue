<template>
  <div class="d-flex flex-column">
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
    <edit-item-dialog />
    <delete-item-dialog />
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import AddItemDialog from "./Dialogs/AddItem";
  import EditItemDialog from "./Dialogs/EditItem";
  import DeleteItemDialog from "./Dialogs/DeleteItem";

  export default {
    name: 'TableContent',
    components: {
        DeleteItemDialog,
        EditItemDialog,
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
          setDialogAddItem: 'dialogs/setAdd',
          setDialogEditItem: 'dialogs/setEdit',
          setDialogDeleteItem: 'dialogs/setDelete'
      }),
      addItem() {
          this.setDialogAddItem(true)
      },
      editItem(item) {
          const editedIndex = this.data.indexOf(item)

          if (editedIndex !== -1) {
              this.setDialogEditItem({
                  index: editedIndex,
                  data: item
              })
          }
      },
      deleteItem(item) {
          const deletedindex = this.data.indexOf(item)

          if (deletedindex !== -1) {
              this.setDialogDeleteItem({
                  index: deletedindex
              })
          }
      }
    }
  }
</script>