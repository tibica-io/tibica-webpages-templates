import { Outlet } from "react-router-dom"
import s from "./TibicaDocsPage.module.scss"
import Sidebar from "../components/Sidebar/Sidebar"
import { useAppSelector } from "../store"
import { ITopic } from "../types/topicTypes"
import ErrorPage from "./ErrorPage"

export default function TibicaDocsPage(){
    const topics:ITopic[] = useAppSelector(selector=>selector.topics.entities)

    const missDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    return (
        <div className={s["layout"]}
            onDragOver={missDrop}
            onDragEnter={missDrop}
            onDragLeave={missDrop}
            onDrop={missDrop}
        >
            <div className={s["sidebar"]}>
                <Sidebar/>
            </div>
            <div className={s["main"]}>
                {
                    topics.length > 0 &&
                        <Outlet/>
                }
                {
                    topics.length == 0 &&
                        <ErrorPage 
                            errorMessage={
                                <span>No topics are currently available for display</span>
                            }

                            errorTitle={
                                <span>Oooooops!</span>
                            }
                        />
                }
            </div>   
        </div>
    )
}