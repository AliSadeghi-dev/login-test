
const mutations = {
  setState(state, payload) {
    const { name, value } = payload;
    state[name] = value;
  },
};

export default mutations;
