import axios from 'axios'

const API_URL = process.env.REACT_APP_API || ''

const helloWorldService = ()  => {

    return axios.get(API_URL)
}


export default helloWorldService