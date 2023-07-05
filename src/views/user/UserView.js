/* eslint-disable prettier/prettier */
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "user",
  setup() {
    let store = useStore();
    const fetchUser = async () => {
      await store.dispatch("user/getUser");
    };
    fetchUser();
    const user = computed(() => {
       return store.state.user.user;
    });
    return {
      user,
    };
  },
};
