<script>
    import { mapState, mapActions } from 'vuex'
    import ItemDialog from "./Item";

    export default {
        name: 'EditItemDialog',
        mixins: [ItemDialog],
        data() {
            return {
                type: 'edit'
            }
        },
        computed: {
            ...mapState({
                dialogEditItem: state => state.dialogs.edit
            }),
            dialog: {
                get() {
                    return !!this.dialogEditItem
                },
                set(value) {
                    this.setDialogEditItem(value)
                }
            }
        },
        watch: {
            dialogEditItem (val) {
                if (val) {
                    const fields = val.data

                    this.artnumber = fields.artnumber
                    this.name = fields.name
                    this.brand = fields.brand
                    this.weight = fields.weight
                    this.quantity = fields.quantity
                    this.price = fields.price
                    this.stock = fields.stock
                }
            }
        },
        methods: {
            ...mapActions({
                setDialogEditItem: 'dialogs/setEdit',
                editTableItem: 'table/editItem'
            }),
            edit() {
                this.validate()

                this.$nextTick(() => {
                    if (this.valid) {
                        this.editTableItem({
                            index: this.dialogEditItem.index,
                            data: this.itemData
                        })
                        this.close()
                    }
                })
            }
        }
    }
</script>