import React, { useContext, useState } from 'react'

const DefaultUserContext = React.createContext()
const DataContext = React.createContext()
const UpdateNameContext = React.createContext()
const UpdateLoggedStatusContext = React.createContext()

export function useDefaultUserContext() {
    return useContext(DefaultUserContext);
}
export function useDataContext() {
    return useContext(DataContext);
}
export function useUpdateNameContext() {
    return useContext(UpdateNameContext);
}
export function useUpdateLoggedStatusContext() {
    return useContext(UpdateLoggedStatusContext);
}

export default function ContextHandler({ children }) {
    const [userName, setUserName] = useState("");
    const [logged, setLogged] = useState(false);

    const defaultUser = {
        name: 'name',
        surname: 'surname',
        adress: 'adress',
        email: 'email',
        isAdmin: false
    }

    const dataContext = {
      appKey: "pass",
      userName: userName,
      logged: logged
    };
    const updateLoggedStatus = (value) => {
        setLogged(logged => value)
        // setUserName({userName:value})
    };
    const updateUserName = (value) => {
        setUserName(userName => value)
        // setLogged(logged => value)
    };

    return (
        <DefaultUserContext.Provider value={defaultUser}>
            <DataContext.Provider value={dataContext}>
                <UpdateLoggedStatusContext.Provider value={updateLoggedStatus}>
                    <UpdateNameContext.Provider value={updateUserName}>
                        { children }
                    </UpdateNameContext.Provider>
                </UpdateLoggedStatusContext.Provider>
            </DataContext.Provider>
        </DefaultUserContext.Provider>
    )
}