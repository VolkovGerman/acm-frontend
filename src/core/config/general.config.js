export default {
    server: process.env.NODE_ENV.indexOf('development') != -1
        ? 'http://localhost:3001'
        : 'https://acm-frontend.herokuapp.com',
    java_server: 'http://acm-backend.herokuapp.com'
}
