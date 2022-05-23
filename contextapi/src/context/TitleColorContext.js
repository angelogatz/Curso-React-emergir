import { createContext, useReducer } from "react";

export const TitleColorContext = createContext()


export const titleColorReducer = (state, action) => {
    //switch
    switch(action.type){
        case "RED":
        return { ...state, color: "red" }
        case "MAGENTA":
        return { ...state, color: "MAGENTA" }
        case "GOLD":
        return { ...state, color: "GOLD" }
        case "GREEN":
        return { ...state, color: "GREEN" }
        case "PINK":
        return { ...state, color: "PINK" }
        default:
            return state;
    }
}

export const TitleColorContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(titleColorReducer, { color: "blue" });

    console.log("Title color context ", state);

    return (
        <TitleColorContext.Provider value={{...state, dispatch}}>
            {children}
        </TitleColorContext.Provider>
    )
}