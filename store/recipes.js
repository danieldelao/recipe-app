import axios from 'axios'

export const CREATED = 'recipe.created'
export const GET = 'recipe.get'
// export const DELETED = 'recipe.delete'

export const state = function () {
    return {
      recipes: []
    }
  }

export const mutations = {
  add (state, { id, name, preptime, rating, ingredients }) {
    state.recipes.push({ id, name, preptime, rating, ingredients })
  },
//   remove (state, id) {
//     const index = state.lists.findIndex(list => list.id === id)
//     if (index !== -1) state.lists.splice(index, 1)
//   },
  set (state, recipes) {
    state.recipes = recipes
  },
//   rename (state, id, name) {
//     const index = state.lists.findIndex(list => list.id === id)
//     if (index !== -1) state.lists[index].name = name
//   }
}

export const actions = {
    // create and retrieve a task list
    async add ({ commit, dispatch }, {name, prepTime, ingridients}) {
      console.log("Inside add function, data is:", name, prepTime, ingridients)
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
            // ingridients: [
            //   {ingredient: "cheese"}
            // ]
            ingridients
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

    // retrieve all recipes
  async get ({ commit }) {
    // if (this.state.accounts.token) {
      console.log("entered get action in recipes.js")
      let res = await axios
        ({
          headers: {
            Authorization: 'Bearer '+this.state.accounts.token
        },
        url: '/api/recipe',
        method: 'GET'
  }).then(function (response) {
    console.log('response is : ' + JSON.stringify(response.data, null, 2));
      if (res.status === 200) {
        commit('set', JSON.stringify(response.data.recipes))
        return {
          message: {
            type: 'success',
            title: 'Recipes Retrieved',
            message: 'Recipes successfully retrieved.'
          },
          [GET]: true
        }
      } else {
        return {
          message: {
            type: 'error',
            title: 'Unable to Get Recipes',
            message: 'The recipes could not be loaded. Error: ' + res.statusCode
          },
          [GET]: false
        }
      }
    // } else {
    //   return {
    //     message: {
    //       type: 'error',
    //       title: 'Unable to Get Recipes',
    //       message: 'You must be authenticated to retrieve recipes.'
    //     },
    //     [GET]: false
    //   }
    // }
  }).catch(error => {
    console.log(error.response)
  });
  },

}