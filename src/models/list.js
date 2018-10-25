
export default {

  namespace: 'list',

  state: [{
    name:'qwq',
    content:'qaq'
  }
  ],

  reducers: {
    'add' (state, payload) {
      console.log(payload)
      return [...state, payload.payload]
    },
    'delete' (state, {payload: id}) {
      return state.filter(item => item.id !== id)
    },
    'update' (state, {payload}) {
      const newItem = state.map((item) => {
        return item.id === payload.id ? payload: item
      })
      return newItem
    },
  }
};
