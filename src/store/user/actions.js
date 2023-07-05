// eslint-disable
import { getUserDetails } from "@/services/user.service";

const actions = {
  async getUser({ commit }) {
    const response = await getUserDetails();
    commit("setState", { name: "user", value: response.data.user });
  },
};

export default actions;
