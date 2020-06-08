<template>
  <v-dialog
    v-model="dialog"
    max-width="500px"
  >
    <v-card>
      <v-card-title>
        <span class="headline">Создать новый товар</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                v-model="artnumber"
                label="Артикул"
              />
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                v-model="name"
                label="Название товара"
              />
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                v-model="brand"
                label="Бренд"
              />
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                v-model="weight"
                label="Вес"
              />
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                v-model="quantity"
                label="Фасовка"
              />
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                v-model="price"
                label="Цена"
              />
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                v-model="stock"
                label="Наличие"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="red"
          dark
          class="mr-1"
          @click="close"
        >
          Отмена
        </v-btn>
        <v-btn
          color="success"
          dark
          @click="add"
        >
          Создать
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
    import { mapState, mapActions } from 'vuex'

    export default {
        name: 'AddItemDialog',
        data() {
            return {
                artnumber: '',
                name: '',
                brand: '',
                weight: '',
                quantity: '',
                price: '',
                stock: ''
            }
        },
        computed: {
            ...mapState({
                dialogAddItem: state => state.dialogs.add
            }),
            dialog: {
                get() {
                    return this.dialogAddItem
                },
                set(value) {
                    this.setDialogAddItem(value)
                }
            }
        },
        methods: {
            ...mapActions({
                setDialogAddItem: 'dialogs/setAdd',
                addTableItem: 'table/addItem'
            }),
            close() {
                this.dialog = false
            },
            add() {
                const data = {
                    artnumber: this.artnumber,
                    name: this.name,
                    brand: this.brand,
                    weight: this.weight,
                    quantity: this.quantity,
                    price: this.price,
                    stock: this.stock
                }

                this.addTableItem(data)
                this.close()
            }
        }
    }
</script>