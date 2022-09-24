import { defineStore } from 'pinia';
import { useState } from './state';
import axios from 'axios';

export const useActions = defineStore('auth.actions', () => {
    const state = useState();

    const actGetCurrentUserInfo = async () => {
        await axios.get('https://5c1f8899838cd80013b01239.mockapi.io/users/1')
        .then(function (res) {
            const response = res.data;
            const state = useState();
            state.currentUser = response;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    }

    return {
        actGetCurrentUserInfo,
    }
})
