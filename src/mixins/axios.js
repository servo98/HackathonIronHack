import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });

export default {
    methods: {
        getAxios(endPoint) {
            http.get(endPoint)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
}