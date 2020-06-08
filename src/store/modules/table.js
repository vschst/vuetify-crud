import tableData from '../../assets/data'
import {
    SET_TABLE_DATA
} from '../mutation-types'

const namespaced = true

const state = {
    data: []
}

const actions = {
    setData({commit}) {
        commit(SET_TABLE_DATA, tableData)
    }
}

const mutations = {
    [SET_TABLE_DATA](state, value) {
        state.data = value
    }
}

export default {
    namespaced,
    state,
    actions,
    mutations
}