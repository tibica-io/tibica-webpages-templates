import { Link, useParams } from "react-router-dom"
import { useAppSelector } from "../store"
import { ITopic } from "../types/topicTypes"
import s from "./NavigationPrevNext.module.scss"
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons"
// import  { ReactComponent as ArrowRight} from "../assets/arrow-right.svg"
 
export default function NavigationPrevNext() {
    const topics:ITopic[] = useAppSelector(selector=>selector.topics.entities)

    const { file_url } = useParams()
    const currentIndex = topics.findIndex((topic) => topic.url === file_url)

    const nextIndex = currentIndex < topics.length - 1 ? currentIndex + 1 : 0
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : topics.length - 1

    return (
        <div className={s["nav"]}>
            {
                currentIndex !== 0 ?
                    <div className={s["nav-prev"]}>
                        <Link to={`/${topics[prevIndex]?.url}`}>
                            <ArrowLeftOutlined/>
                            {" "}
                            {topics[prevIndex]?.menuName}
                        </Link>
                    </div>
                    :
                    <div></div>
            }

            {
                currentIndex !== topics.length - 1 ?
                    <div className={s["nav-next"]}>
                        <Link to={`/${topics[nextIndex]?.url}` }>
                            {topics[nextIndex]?.menuName}
                            {" "}
                            <ArrowRightOutlined />
                        </Link>
                    </div>
                    :
                    <div></div>
            }
        </div>
    )
}