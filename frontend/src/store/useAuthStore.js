import { create } from "zustand";

export const useAuthStore = create((set) => ({
    authUser: null,
    isSigninUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,
    isCheckingAuth: true,

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/check");

            set({
                authUser: res.data,})
        } catch (error) {
            console.error("Error checking auth:", error);
            set({
                authUser: null,
            });

        }finally {
            set({ isCheckingAuth: false });
        }
    }
}));