const useForcast = () =>{
    const [isError, setError] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [forcast, setForcast] = useState(false)
    return {
        isError, isLoading, forcast
    };
}
export default useForcast;