import { useState, useEffect } from "react"

const useOffline = () => {

    const [isOffline, setIsOffline] = useState(true);

    const handleOffline = () =>{
        setIsOffline(false);
    }
    const handleOnline = () =>{
        setIsOffline(true);
    }

    useEffect(() => {
            window.addEventListener('online', handleOnline);
            window.addEventListener('offline', handleOffline);

            return ()=> {
                window.removeEventListener('online', handleOnline);
                window.removeEventListener('offline', handleOffline);
            }

        }, []);

  return isOffline;
}

export default useOffline;
