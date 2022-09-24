import { useAuthStore } from './modules/auth';

const useStore = () => ({
    auth: useAuthStore(),
});

export default useStore;
