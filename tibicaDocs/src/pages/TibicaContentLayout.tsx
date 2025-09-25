import s from "./TibicaContentLayout.module.scss"
import { useParams } from "react-router-dom"
import { useAppSelector } from "../store"
import { ReactNode, useEffect, useRef, useState } from "react"
import { ITopic } from "../types/topicTypes"
import NavigationPrevNext from "../components/NavigationPrevNext"
import MarkdownViewer from "../components/MarkdownViewer"
import AnchorMenu from "../components/AnchorMenu"
import ErrorPage from "./ErrorPage"

export default function TibicaContentLayout(){
    const { file_url } = useParams()
    const topics:ITopic[] = useAppSelector(selector=>selector.topics.entities)
    const contentRefElement = useRef<HTMLDivElement>(null)
    const [currentTopic, setCurrentTopic] = useState<ITopic | undefined>(undefined)
    const anchorStringArray:string[] = []
    const [error, setError] = useState<ReactNode | null>()

    useEffect(()=>{
        const newTopic:ITopic|undefined = topics.find((topicItem)=>{
            const { url } = topicItem
            const cleanTopicUrl = url[0] === "/" ? url.substring(1) : url
    
            return cleanTopicUrl === file_url
        })

        if(!newTopic){
            const errorElement = (
                <span>
                    File with the url <b>{file_url}</b> not found. It is possible that the url to file is wrong
                </span>
            )
            setError(errorElement)
        } else{
            setCurrentTopic(newTopic)
            setError(null)
        }
    }, [file_url])

    const handleStringsArray = (data:string)=>{
        anchorStringArray.push(data)
    }

    return (
        <div ref={contentRefElement} className={s["content"]}>
            {
                error &&
                    <ErrorPage errorMessage={error}/>
            }
            {
                !error && currentTopic && contentRefElement.current &&
                    <div className={s["inner-content"]}>
                        <div className={s["markdown-and-anchor"]}>
                            <MarkdownViewer 
                                handleStringsArray={handleStringsArray} 
                                currentTopic={ currentTopic }
                                contentContainer={ contentRefElement.current }
                            />

                            <div className={s["anchor-menu"]}>
                                <AnchorMenu 
                                    contentContainer={ contentRefElement.current }
                                    anchorStringArray={ anchorStringArray }
                                />
                            </div>
                        </div>
    
                        <div className={s["pagination"]}>
                            <NavigationPrevNext/>
                        </div>
                    </div>
            }
           
        </div>
    )
}