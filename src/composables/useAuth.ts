import { useUserStore } from '@/stores/user';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { computed, ref, reactive } from 'vue';
import { useLocalStorage } from './useLocalStorage';
import type { IUser } from '@/types';

export function useAuth() {
    const userStore = useUserStore();
    const { storedValue, setStoredValue, removeStoredValue} = useLocalStorage<IUser>('user');
    const errorAuth = reactive<{ message: string | null }>({ message: null });
    const isLoadingAuth = ref<boolean>(false);

    const isAuth = computed<boolean>(() => !!storedValue.value?.email && !!userStore.email && !!userStore.token);

    const auth = getAuth();

    const successResponse = (userCredential: any) => {
        const user: IUser = {
            email: userCredential.user.email,
            token: userCredential.user.accessToken,
            id: userCredential.user.uid,
        };
        userStore.setUser(user);
        setStoredValue(user);
        isLoadingAuth.value = false;
    } 

    const createUser = (email: string, password: string) => {
        return new Promise((resolve, reject) => {
            isLoadingAuth.value = true;
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential: any) => {
                    successResponse(userCredential)
                    resolve(userCredential.user.email);
                })
                .catch((err) => {
                    errorAuth.message = err.code;
                    isLoadingAuth.value = false;
                    reject(err);
                });
        });
    };

    const loginUser = (email: string, password: string) => {
        return new Promise((resolve, reject) => {
            isLoadingAuth.value = true;
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential: any) => {
                    successResponse(userCredential)
                    resolve(userCredential.user.email);
                })
                .catch((err) => {
                    errorAuth.message = err.code;
                    isLoadingAuth.value = false;
                    reject(err);
                });
        });
    };

    const logoutUser =  () => {
        return new Promise((resolve, reject) => {
            auth.signOut()
                .then(() => {
                    removeStoredValue()
                    userStore.removeUser()
                    resolve('user logout')
                })
                .catch((err) => reject(err))
        })
    }

    return {
        isAuth,
        errorAuth,
        createUser,
        isLoadingAuth,
        loginUser,
        logoutUser
    };
}
