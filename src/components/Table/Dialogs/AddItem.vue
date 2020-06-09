<script>
    import { mapState, mapActions } from 'vuex'
    import ItemDialog from "./Item";

    export default {
        name: 'AddItemDialog',
        mixins: [ItemDialog],
        computed: {
            ...mapState({
                dialogAddItem: state => state.dialogs.add
            }),
            dialog: {
                get() {
                    return !!this.dialogAddItem
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
            add() {
                this.validate()

                this.$nextTick(() => {
                    if (this.valid) {
                        this.addTableItem(this.itemData)
                        this.close()
                    }
                })
            }
        }
    }
</script>