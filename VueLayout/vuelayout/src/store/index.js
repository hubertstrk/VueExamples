import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  layout: 'OneSided',
  twoSided: {
    leftComponent: 'ComponentA',
    rightComponent: 'ComponentB'
  },
  oneSided: {
    component: 'ComponentA'
  }
}

const mutations = {
  setLayout (state, layout) {
    state.layout = layout
  },
  setComponent (state, name) {
    state.oneSided.component = name
  },
  setRightComponent (state, name) {
    state.twoSided.rightComponent = name
  },
  setLeftComponent (state, name) {
    state.twoSided.leftComponent = name
  }
}

export default new Vuex.Store({
  state,
  mutations
})
