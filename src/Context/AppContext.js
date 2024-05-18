import { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children })
{
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "", accountType: "Person" });
    const [savedUser, setSavedUser] = useState(null);
    const [token, setToken] = useState("");
    const [name, setName] = useState("");
    const value = {
        formData,
        setFormData,
        savedUser,
        setSavedUser,
        token,
        setToken,
        name,
        setName
    }

     return <AppContext.Provider value={value}>
         {children}
     </AppContext.Provider>
}
