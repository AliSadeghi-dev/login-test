/* eslint-disable prettier/prettier */
import { ref } from "vue";
import { getAuthCode, verifyUser } from "../../services/auth.service";
import Toastify from "toastify-js";
import router from "@/router";

export default {
  name: "login",
  setup() {
    let reciverdCode = ref(false);
    let phoneNumber = ref("");
    let loading = ref(false);
    let code = ref("");

    const getAuth = async () => {
      if (phoneNumber.value === "") {
        return Toastify({
          text: "لطفا شماره موبایل خود را وارد کنید",
          duration: 3000,
        }).showToast();
      }
      loading.value = true;
      const data = {
        phone: phoneNumber.value,
      };
      const response = await getAuthCode(data);
      if (response.status !== 200) {
        loading.value = false;
        return Toastify({
          text: response.message,
          duration: 3000,
        }).showToast();
      } else {
        loading.value = false;
        reciverdCode.value = true;
      }
    };

    const verify = async () => {
      if (code.value === "") {
        return Toastify({
          text: "لطفا کد ارسال شده را وارد کنید",
          duration: 3000,
        }).showToast();
      }
      loading.value = true;

      const data = {
        phone: phoneNumber.value,
        code: code.value,
      };

      const response = await verifyUser(data);
      if (response.status !== 200) {
        loading.value = false;
        return Toastify({
          text: response.message,
          duration: 3000,
        }).showToast();
      } else {
        loading.value = false;
        router.push({ path: "/user" });
      }
    };

    return {
      reciverdCode,
      getAuth,
      phoneNumber,
      loading,
      verify,
      code,
    };
  },
};
