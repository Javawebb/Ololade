import { useContext,createContext,useState } from "react";
const TestContext = createContext()
TestContext.displayName = 'TestContext'

export const useTesstContext = () => useContext(TestContext;

function TestContextProvider ({children}) {
    return(
        <TestContext.Provider value={'TestContext'}>
            {children}
        </TestContext.Provider>
    )
}
export default TestContextProvider;