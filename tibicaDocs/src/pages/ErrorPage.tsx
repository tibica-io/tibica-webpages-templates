import s from "./ErrorPage.module.scss"
import { useNavigate } from "react-router-dom"
import { Button } from "@perfsys-io/uikit"
import { ReactComponent as NotFoundIcon } from "../assets/images/not-found.svg"
import { ReactNode } from "react"

interface IErrorPageProps{
    errorTitle?:ReactNode
    errorMessage?:ReactNode
}

export default function ErrorPage({errorMessage, errorTitle}:IErrorPageProps) {
    const navigate = useNavigate()

    return (
        <div className={s.container}>
            <NotFoundIcon className={s.image}/>
            <h1 className="title large mb0">
                {
                    errorTitle ?
                        errorTitle
                        :
                        <span>Ooooops! Page not found</span>
                }
                
            </h1>
            <p className={s.description}>
                {
                    errorMessage 
                        ?
                        errorMessage
                        :
                        <span>It seems like the page that you are looking for doesn’t exist. Or there is some error in the URL.</span>
                }
            </p>
            <Button onClick={() => navigate("/")}>GO TO THE MAIN PAGE</Button>
        </div>
    )
}
