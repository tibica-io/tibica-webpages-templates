import { Outlet } from "react-router-dom"
import { useAppSelector } from "../store"
import s from "./MainLayout.module.scss"
import { Loader } from "@perfsys-io/uikit"

export default function MainLayout(){
    const loadingStatus = useAppSelector(selector=>selector.topics.status)

    if(loadingStatus === "pending"){
        return (
            <div className={s["spinner-container"]}>
                <Loader center/>
            </div>
        )
    }

    return (
        <>
            {
                loadingStatus === "succeeded" &&
                    <Outlet/>
            }
        </>
    )
}