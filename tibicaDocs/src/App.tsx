import { useEffect } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import TibicaDocsPage from "./pages/TibicaDocsPage"
import "./styles/main.scss"
import { useAppDispatch, useAppSelector } from "./store"
import { fetchAllTopics } from "./store/Topic/topicsSlice"
import { ITopic } from "./types/topicTypes"
import TibicaContentLayout from "./pages/TibicaContentLayout"
import MainLayout from "./pages/MainLayout"
import ErrorPage from "./pages/ErrorPage"

export default function App() {
    const topics:ITopic[] = useAppSelector((selector)=>selector.topics.entities)
    const dispatch = useAppDispatch()

    useEffect(() => {
        async function init(){
            await dispatch(fetchAllTopics())
        }

        init()
    }, []) 

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path="/" element={<TibicaDocsPage/>}>
                        <Route path=":file_url/" element={<TibicaContentLayout/>}/>
                        <Route path="*" element={<ErrorPage/>}/>
                        {topics.length && <Route path="/" element={<Navigate to={`${topics[0].url}`} replace/>}/>}
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
