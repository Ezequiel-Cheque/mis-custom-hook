import React, {useState, useEffect, useRef} from 'react'

export const useFetch = (url) => {
    
    const isMount = useRef(true);
    const [state, setstate] = useState({data: null, loading: true, error: null})

    useEffect(() => {
        return () => {
          isMount.current=false;
        }
    }, [])

    useEffect(() => {
        fetch(url)
        .then((data)=>data.json())
        .then((datos=>{
           
            

                if(isMount.current){
                    setstate({
                        loading: false,
                        error: null,
                        data: datos 
                     });
                }else{
                    console.log("setState no se llamo");
                }
                

            
        }))

    }, [url])

    return state;
}
