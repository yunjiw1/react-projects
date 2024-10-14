import React, { useState, createContext } from 'react'

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <AppContext.Provider 
            value={{
                isSidebarOpen,
                isModalOpen,
                toggleSidebar,
                toggleModal,
            }}
        >
            { children }
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider };