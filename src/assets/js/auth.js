import { defineStore } from "pinia";


export const useAuthStore = defineStore('auth', {
    state: () => ({
      user: null
    }),
    actions: {
      login(userData) {
        this.user = userData;
      },
      logout() {
        this.user = null;
      }
    },
    persist: {
        enabled: true, // 🔥 Kích hoạt lưu trữ
        strategies: [
          {
            key: 'auth', // Đặt tên key lưu trữ
            storage: localStorage, // Hoặc sessionStorage nếu chỉ muốn lưu trong phiên làm việc
          }
        ]
      } // Giữ trạng thái sau khi tải lại trang
  });
