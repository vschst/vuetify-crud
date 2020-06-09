<template>
  <v-dialog
    v-model="dialog"
    max-width="500px"
    @click:outside="close"
  >
    <v-card>
      <v-card-title>
        <span class="headline">{{ isAdd ? 'Создать новый товар' : 'Редактирование товара' }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  v-model="artnumber"
                  label="Артикул"
                  :rules="artnumberRules"
                  required
                  @input="resetValidation"
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
                  :rules="nameRules"
                  required
                  @input="resetValidation"
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
                  :rules="brandRules"
                  required
                  @input="resetValidation"
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
                  :rules="weightRules"
                  required
                  @input="resetValidation"
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
                  :rules="quantityRules"
                  required
                  @input="resetValidation"
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
                  :rules="priceRules"
                  required
                  @input="resetValidation"
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
                  :rules="stockRules"
                  required
                  @input="resetValidation"
                />
              </v-col>
            </v-row>
          </v-form>
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
          v-if="isAdd"
          ref="btn"
          color="success"
          dark
          @click="add"
        >
          Создать
        </v-btn>
        <v-btn
          v-else
          ref="btn"
          color="primary"
          dark
          @click="edit"
        >
          Редактировать
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
    export default {
        name: 'ItemDialog',
        data() {
            return {
                type: 'add',
                valid: false,
                artnumber: '',
                artnumberRules: [
                    v => !!v || 'Введите артикул',
                    v => !isNaN(v) || 'Артикул должен быть числом'
                ],
                name: '',
                nameRules: [
                    v => !!v || 'Введите название',
                ],
                brand: '',
                brandRules: [
                    v => !!v || 'Введите бренд',
                ],
                weight: '',
                weightRules: [
                    v => !!v || 'Введите вес',
                    v => !isNaN(v) || 'Вес должен быть числом',
                    v => (v > 0) || 'Вес должен быть положительным'
                ],
                quantity: '',
                quantityRules: [
                    v => !!v || 'Укажите фасовку',
                    v => !isNaN(v) || 'Фасовка должна быть числом',
                    v => (v > 0) || 'Фасовка должна быть положительной'
                ],
                price: '',
                priceRules: [
                    v => !!v || 'Введите цену',
                    v => !isNaN(v) || 'Цена должна быть числом',
                    v => (v > 0) || 'Цена должна быть положительной'
                ],
                stock: '',
                stockRules: [
                    v => !!v || 'Укажите наличие',
                    v => (v === '0' || v === '1') || 'Наличие должно быть 0 или 1'
                ]
            }
        },
        computed: {
            isAdd() {
              return this.type === 'add'
            },
            itemData() {
                return {
                  artnumber: this.artnumber,
                  name: this.name,
                  brand: this.brand,
                  weight: this.weight,
                  quantity: this.quantity,
                  price: this.price,
                  stock: this.stock
                }
            }
        },
        methods: {
            validate() {
                this.$refs.form.validate()
            },
            resetValidation() {
                this.$refs.form.resetValidation()
            },
            close() {
                this.resetValidation()
                this.$refs.form.reset()
                this.dialog = false
            }
        }
    }
</script>