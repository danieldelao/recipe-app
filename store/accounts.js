// import { GET } from './todoLists'
import { getCookie, setCookie } from '~/assets/cookie'
import axios from 'axios'

export const AUTHENTICATED = 'accounts.authenticated'
export const CREATED = 'accounts.created'

export const state = function () {
  let data = getCookie('recipe-account')
  if (data) data = JSON.parse(decodeURIComponent(data))
  return {
    token: data ? data.token : '',
    user: data ? data.username : ''
  }
}

export const mutations = {
  setAccount (state, { token, username }) {
    state.token = token
    state.username = username

    const cData = token
      ? encodeURIComponent(JSON.stringify({ token, username }))
      : ''
    setCookie('recipe-account', cData, token ? 1 : 0)
  }
}

export const actions = {
  async authenticate ({ commit, dispatch }, { username, password }) {
    // const res = await axios.put('/api/authenticate', { username, password })
    console.log("Inside authenticate function, data is:", username, password)
    // const res = await axios.post('http://localhost:3001/login', {
      const res = await axios({
        method: 'POST',
        url: 'api/login',
        auth: {
          username,
          password
        }
        //   proxy: {
        //     host: 'localhost',
        //     port: 3001
        //   },
        // withCredentials: true,
        // auth: {
        //     username: username,
        //     password: password
        // }
        }).then(function (response) {
          console.log('response is : ' + response.data);
          console.log(res)
      if (response.status === 200) {
        commit('setAccount', {
          token: response.data,
          username
        })
        return {
          message: {
            type: 'success',
            title: 'Authenticated',
            message: 'Authenticated successfully.'
          },
          [AUTHENTICATED]: true
        }
      } else {
        return {
          message: {
            type: 'error',
            title: 'Authentication Failed',
            message: 'User name or password is incorrect'
          },
          [AUTHENTICATED]: false
        }
      }
    })

    
  },

  // async create ({ commit, dispatch }, { username, password }) {
  //   console.log("Inside create function, data is:", username, password)
  //   const res = await axios.post( 'api/accounts', {username, password})
  //   if (response.status === 201) {
  //     const results = dispatch('accounts/authenticate', username, password)
  //   return{
  //     [CREATED]: true,
  //       [AUTHENTICATED]: results[AUTHENTICATED]
        // [GET]: results[GET]
      // method: 'POST',
      // url: 'api/accounts',
      // data: { username, password } 
    // }).then(function (response) {
    //   if (response.status === 201) {
    //     const results = dispatch('accounts/authenticate', username, password)
    //     return {
    //       [CREATED]: true,
    //       [AUTHENTICATED]: results[AUTHENTICATED],
    //       [GET]: results[GET]
      //   }
      // } else if (response.status === 409) {
      //   return {
      //     message: {
      //       type: 'error',
      //       title: 'Account Creation Failed',
      //       message: 'The user name "' + userame + '" is already in use.'
      //     },
      //     [CREATED]: false,
      //     [AUTHENTICATED]: false,
      //     [GET]: false
      //   }
      // }
    // }
    // })
  // },

  async create ({ commit, dispatch }, { username, password }) {
    console.log("Inside create function, data is:", username, password)
    const res = await axios
      ({
        baseURL: 'http://localhost:3000',
        url: '/api/accounts',
        // url: '/api/accounts',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          username: username,
          password: password
        }
      }).then(function (response) {
        console.log('response is : ' + response.data);
      if (response.status === 201) {
        console.log("create sending to authenticate function: ", username, password)
        const results = dispatch('authenticate', { 
          username, 
          password 
          }
        )
      return{
        [CREATED]: true,
          [AUTHENTICATED]: results[AUTHENTICATED]
        // [GET]: results[GET]
      // method: 'POST',
      // url: 'api/accounts',
      // data: { username, password } 
    // }).then(function (response) {
    //   if (response.status === 201) {
    //     const results = dispatch('accounts/authenticate', username, password)
    //     return {
    //       [CREATED]: true,
    //       [AUTHENTICATED]: results[AUTHENTICATED],
    //       [GET]: results[GET]
        }
      } else if (response.status === 409) {
        return {
          message: {
            type: 'error',
            title: 'Account Creation Failed',
            message: 'The user name "' + userame + '" is already in use.'
          },
          [CREATED]: false,
          [AUTHENTICATED]: false,
          [GET]: false
        }
      }
    // }
    }).catch(error => {
      console.log(error.response)
    });
  },

  delete ({ commit }, id) {
    
  },

  logout ({ commit }) {
    commit('setAccount', { token: '' })
  },

  update ({ commit }, id, name) {
    
  }
}