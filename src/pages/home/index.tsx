import { useEffect, useContext } from 'react'
import { PoseCard } from '../../components/PoseCard'
import { SideBarDetails } from '../../components/SideBarDetails'
import { PosesContext } from '../../context'

export const Home = () => {

    const context = useContext(PosesContext)

    const fetchUrl = 'https://yoga-api-nzy4.onrender.com/v1/poses'

    useEffect(() => {
        fetch(fetchUrl)
        .then(response => response.json())
        .then(data => {
            context.setPoses(data)            
        })
    }, [])

    return(
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Yoga Poses</h1>
                        <div className="h-1 w-20 bg-red-500 rounded"></div>
                    </div>
                    </div>
                    <div className="flex flex-wrap -m-3 max-w-[80%]">
                        {
                            context.poses?.map(pose => (
                                <PoseCard key={pose.id} value={pose}/>
                            ))
                        }
                    </div>
                </div>
            </section>
            <aside>
                <SideBarDetails />
            </aside>
        </>
    )
}