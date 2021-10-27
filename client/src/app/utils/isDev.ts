const result = (process.env.REACT_APP_ENV === 'development') ? true : false;
const isDev = () => {
    console.log(process.env.REACT_APP_ENV)
    return result
}

export default isDev