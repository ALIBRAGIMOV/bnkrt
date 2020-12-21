import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        list: {
            name: "",
            zoneActivity: "",
            timePicker1: "",
            timePicker2: "",
            delivery: false,
            activityType: [],
            resRadio: "",
            formActDesc: ""
        },
        users: []
    },
    actions: {
        GET_USERS_FROM_API({commit}){
            return axios('https://jsonplaceholder.typicode.com/users', {
                method: 'GET'
            })
                .then((response) => {
                    commit('SET_USERS_TO_VUEX', response.data)
                })
        }
    },
    mutations: {
        increment(state) {
            state.counter = state.counter + 1;
        },
        decrement(state) {
            state.counter = state.counter - 1;
        },
        setData(state, payload) {
            state.list = { ...state.list, ...payload };
        },
        reset(state) {
            Vue.set(state, 'list', {
                name: "",
                zoneActivity: "",
                timePicker1: "",
                timePicker2: "",
                delivery: false,
                activityType: [],
                resRadio: "",
                formActDesc: ""
            })
        },
        SET_USERS_TO_VUEX: (state, users) => {
            state.users = users
        }
    },
    getters: {
        counter: state => state.counter,
        USERS(state){
            return state.users
        }
       // name: state => state.name
    }
});