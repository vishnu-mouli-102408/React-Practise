import { createContext } from "react";

const userContext = createContext({
    user:{
        id:null,
        name:"Mouli",
        email:null
    }
});

export default userContext;