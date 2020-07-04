import api from '../../api/imgur'

const state = {
  images: []
}

const getters = {
  allImages: state => state.images
}

const actions = {
  async fetchImages() {
    const response = await api.fetchImages()
    console.log(response)
  }
}

const mutations = {
  setImages: (state, images) => {
    state.images = images
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}