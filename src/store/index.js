import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        one: 1,
        two: 2
    },
    getters: {
        one: (state, getters) => {
            return state.one
        },
        two: (state) => state.two
    },
    mutations: {
        inc: (state, {value, other}) => {
            state.one += value;
            // async -> state.one += other;
        },
        dec: (state) => {
            state.one -= 1;
        }
    },
    actions: {
        apicall: ({state, commit}, {id}) => {
            console.log("state", state);
            //async ->
            commit('inc', {value: 5})
        }
    },
    modules: {
        submodule: {
            namespaced: true,
            state: {
                one: 4
            },
            getters: {
                one: (state, getters, rootGetters, rootState) => {
                    console.log("rootState", rootState);
                    console.log("rootGetters", rootGetters);
                    console.log("getters", getters);
                    console.log("state", state);
                    return state.one
                } // submodule/one
            },
            mutations: {},
            actions: {}
        }
    },
    strict: true
})
