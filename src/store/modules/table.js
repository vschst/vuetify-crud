import tableData from '../../assets/data'
import {
    SET_TABLE_DATA,
    ADD_TABLE_ITEM,
    EDIT_TABLE_ITEM,
    DELETE_TABLE_ITEM
} from '../mutation-types'

const namespaced = true

const state = {
    data: []
}

const actions = {
    setData({commit}) {
        commit(SET_TABLE_DATA, tableData)
    },
    addItem({ commit }, value) {
        commit(ADD_TABLE_ITEM, value)
    },
    editItem({ commit }, value) {
        commit(EDIT_TABLE_ITEM, value)
    },
    deleteItem({ commit }, index) {
        commit(DELETE_TABLE_ITEM, index)
    }
}

const mutations = {
    [SET_TABLE_DATA](state, value) {
        state.data = value
    },
    [ADD_TABLE_ITEM](state, value) {
        state.data.push(value)
    },
    [EDIT_TABLE_ITEM](state, value) {
        const index = value.index
        const data = value.data

        state.data.splice(index, 1, data)
    },
    [DELETE_TABLE_ITEM](state, index) {
        state.data.splice(index, 1)
    }
}

export default {
    namespaced,
    state,
    actions,
    mutations
}