import { createContext, ReactNode, useState } from 'react';

interface PosesContextType {
    poses: any[] | null;
    setPoses: React.Dispatch<React.SetStateAction<any[] | null>>;
    openSide: boolean;
    setOpenSide: React.Dispatch<React.SetStateAction<boolean>>;
}

interface LayoutProps {
    children: ReactNode,
}


export const PosesContext = createContext<PosesContextType>({
    poses: null,
    setPoses: () => {},
    openSide: false,
    setOpenSide: () => {},
})


export const PosesContextProvider = ({children}: LayoutProps) => {

    const [poses, setPoses] = useState<any[] | null>(null)
    const [openSide, setOpenSide] = useState<boolean>(false)


    return(
        <PosesContext.Provider value={{
            poses,
            setPoses,
            openSide,
            setOpenSide,
        }}>
            {children}
        </PosesContext.Provider>
    )
}