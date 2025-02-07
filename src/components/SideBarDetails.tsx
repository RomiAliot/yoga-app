import { XMarkIcon } from '@heroicons/react/24/solid'
import { PosesContext } from '../context/index'
import { useContext } from 'react'

export const SideBarDetails = () => {
    const context = useContext(PosesContext)

    return(
        <>
            <div className={`${context.openSide === true ? '' : 'hidden'} sidebardetails fixed border-2 border-amber-[90px]  rounnded top-20 right-0 w-[300px] h-[80vh] p-2`}>
                <div className="close flex justify-end align-middle ">           
                    <XMarkIcon 
                        className='inline cursor-pointer text-red-500 w-8 '
                        onClick={() => context.setOpenSide(false)} 
                    />
                </div>
                <div className="posedetail">detalle de la pose</div>

            </div>
        </>
    )
}