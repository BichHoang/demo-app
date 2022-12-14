import { defineStore } from 'pinia';
import { computed } from 'vue';
import { useState } from './state';

export const useGetters = defineStore('auth.getters', () => {
    const state = useState()
    const getCurrentUser = computed(():Object => state.currentUser)
    return { getCurrentUser }
})
