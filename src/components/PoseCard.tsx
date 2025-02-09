import { MagnifyingGlassPlusIcon, HeartIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { PosesContext } from '../context'

interface PoseCardProps {
    value: {
        id: number;
        url_png: string;
        english_name: string;
        pose_benefits: string;
    }
}

export const PoseCard = ({value : {url_png, english_name}}: PoseCardProps) => {

    const context = useContext(PosesContext)

    return(
        <>
            <div className="xl:w-1/3 md:w-1/3 p-4">
                <div className="bg-gray-100 p-6 rounded-lg relative">
                    <MagnifyingGlassPlusIcon 
                        className='h-8 absolute top-4 right-4 text-red-500 cursor-pointer'
                        onClick={() => context.setOpenSide(true)}
                    />
                    <HeartIcon 
                        className='h-8 absolute top-4 left-4 text-red-white   cursor-pointer' 
                        onClick={() => console.log('agregado favorito')}
                    />
                    <img className="h-40 rounded w-full object-contain object-center mb-6" src={url_png} alt="content"/>
                    <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">SUBTITLE</h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{english_name}</h2>
                </div>
            </div>
        </>
    )
}