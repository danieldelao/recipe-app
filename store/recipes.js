import axios from 'axios'

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
    // create and retrieve a task list
    async add ({ commit, dispatch }, {name, prepTime}) {
      console.log("Inside add function, data is:", name, prepTime)
      let res = await axios
        ({
          headers: {
            Authorization: 'Bearer '+this.state.accounts.token
          },
          url: '/api/recipe',
          method: 'POST',
          data: {
            name: name,
            preptime: prepTime,
            season: "winter",
            rating: 5,
            ingredients: {
              ingredient: "cheese"
            }
          }
        }).then(function (response){
          console.log('response is : ' + response.data);
        if (respose.status === 201) {
        // res = await axios.get(res.headers.Location)
        if (respose.status === 200) {
          commit('add', res.data)
          return {
            message: {
              type: 'success',
              title: 'Recipe Created',
              message: 'The recipe "' + name + '" was created.'
            },
            [CREATED]: true,
            [GET]: true
          }
        } else {
          return {
            message: {
              type: 'success',
              title: 'Recipe Created',
              message: 'The recipe "' + name + '" was created.'
            },
            [CREATED]: true,
            [GET]: false
          }
        }
      } else {
        return {
          message: {
            type: 'error',
            title: 'Recipe Not Created',
            message: 'Unable to create recipe "' + name + '".'
          },
          [CREATED]: false,
          [GET]: false
        }
      } //last else
    }).catch(error => {
      console.log(error.response)
    });
    }, //.then
  }