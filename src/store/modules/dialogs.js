import {
    SET_DIALOG_ADD_ITEM,
    SET_DIALOG_EDIT_ITEM,
    SET_DIALOG_DELETE_ITEM
} from '../mutation-types'

const namespaced = true

const state = {
    add: false,
    edit: false,
    delete: false
}

const actions = {
    setAdd({commit}, value) {
        commit(SET_DIALOG_ADD_ITEM, value)
    },
    setEdit({ commit }, value) {
        commit(SET_DIALOG_EDIT_ITEM, value)
    },
    setDelete({ commit }, value) {
        commit(SET_DIALOG_DELETE_ITEM, value)
    }
}

const mutations = {
    [SET_DIALOG_ADD_ITEM](state, value) {
        state.add = value
    },
    [SET_DIALOG_EDIT_ITEM](state, value) {
        state.edit = value
    },
    [SET_DIALOG_DELETE_ITEM](state, value) {
        state.delete = value
    }
}

export default {
    namespaced,
    state,
    actions,
    mutations
}