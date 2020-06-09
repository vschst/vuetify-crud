<template>
  <v-dialog
    v-model="dialog"
    max-width="300px"
    @click:outside="close"
  >
    <v-card>
      <v-card-title class="headline">
        Удаление товара
      </v-card-title>
      <v-card-text>Вы действительно хотите удалить данный товар?</v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="green darken-1"
          text
          @click="close"
        >
          Отмена
        </v-btn>
        <v-btn
          color="red "
          dark
          @click="_delete"
        >
          Удалить
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
    import { mapState, mapActions } from 'vuex'

    export default {
        name: 'DeleteItemDialog',
        computed: {
            ...mapState({
                dialogDeleteItem: state => state.dialogs.delete
            }),
            dialog: {
                get() {
                    return !!this.dialogDeleteItem
                },
                set(value) {
                    this.setDialogDeleteItem(value)
                }
            }
        },
        methods: {
            ...mapActions({
                setDialogDeleteItem: 'dialogs/setDelete',
                deleteTableItem: 'table/deleteItem'
            }),
            close() {
                this.dialog = false
            },
            _delete() {
                this.deleteTableItem(this.dialogDeleteItem.index)
                this.close()
            }
        }
    }
</script>