import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [page, setPage] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    return (
        <AppContext.Provider
            value={{
                page,
                setPage,
                isSidebarOpen,
                setIsSidebarOpen,
                isSubmenuOpen,
                setIsSubmenuOpen,
            }}
        >
            {children}
        </AppContext.Provider>
    );

}

export {AppContext, AppProvider}