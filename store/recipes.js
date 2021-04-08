import ingridients from '~/api/db/ingridients'
import axios from '~/assets/axios'

export const CREATED = 'recipe.created'
// export const GET = 'recipe.get'
// export const DELETED = 'recipe.delete'

export const state = function () {
    return {
      recipes: []
    }
  }

export const mutations = {
  add (state, { id, name }) {
    state.lists.push({ id, name })
  },
//   remove (state, id) {
//     const index = state.lists.findIndex(list => list.id === id)
//     if (index !== -1) state.lists.splice(index, 1)
//   },
  set (state, lists) {
    state.lists = lists
  },
//   rename (state, id, name) {
//     const index = state.lists.findIndex(list => list.id === id)
//     if (index !== -1) state.lists[index].name = name
//   }
}

export const actions = {

    // create and retrieve a recipe list
    async createRecipe ({ commit, dispatch }, {name, preptime, season, rating}) {
      let res = await axios({
        method: 'POST',
        url: 'api/recipe', 
        data: {
          name, 
          preptime,
          season: "winter", 
          rating: 0
        }
      }).then(function(res){
        console.log("Response status", res.status)
        if (res.status === 201) {
        //   res = await axios.get(res.headers.Location)
        //   if (res.status === 200) {
        //     commit('add', res.data)
        //     return {
        //       message: {
        //         type: 'success',
        //         title: 'Recipe Created',
        //         message: 'The recipe "' + name + '" was created.'
        //       },
        //       [CREATED]: true,
        //       [GET]: true
        //     }
        //   } else {
        //     return {
        //       message: {
        //         type: 'success',
        //         title: 'Recipe Created',
        //         message: 'The recipe "' + name + '" was created.'
        //       },
        //       [CREATED]: true,
        //       [GET]: false
        //     }
        //   }
        // } else {
        //   return {
        //     message: {
        //       type: 'error',
        //       title: 'Recipe Not Created',
        //       message: 'Unable to create recipe "' + name + '".'
        //     },
        //     [CREATED]: false,
        //     [GET]: false
        //   }
        }
      })
    
    },
    async editRecipe () {

    }
  }