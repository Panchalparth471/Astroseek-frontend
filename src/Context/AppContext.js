<<<<<<< HEAD
import { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children })
{
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "", accountType: "Person" });
    const [savedUser, setSavedUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState("");
    const value = {
        formData,
        setFormData,
        savedUser,
        setSavedUser,
        isLoggedIn,
        setIsLoggedIn,
        name,
        setName
    }

     return <AppContext.Provider value={value}>
         {children}
     </AppContext.Provider>
}
=======
import { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children })
{
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "", accountType: "Person" });
    const [savedUser, setSavedUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState("");
    const value = {
        formData,
        setFormData,
        savedUser,
        setSavedUser,
        isLoggedIn,
        setIsLoggedIn,
        name,
        setName
    }

     return <AppContext.Provider value={value}>
         {children}
     </AppContext.Provider>
}
>>>>>>> ba41696de80d4608382a85a0a71fea55627f0be9
