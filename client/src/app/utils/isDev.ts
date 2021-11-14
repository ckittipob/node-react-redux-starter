const result = (process.env.REACT_APP_ENV === 'development') ? true : false;
const isDev = () => {
    return result
}

export default isDev