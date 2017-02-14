const backend = {
    domain: 'https://acm-backend.herokuapp.com'
}

const requests = {
    menu: `${backend.domain}/pages`,
    news: `${backend.domain}/news`,
    words: `${backend.domain}/words`,
}

export {
    backend,
    requests
}