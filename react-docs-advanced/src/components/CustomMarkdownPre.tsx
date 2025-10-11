import { ReactNode, useState } from "react"
import CopyButton from "./CopyButton"
import s from "./CustomMarkdownPre.module.scss"

interface ICustomMarkdownPreProps{
    children: ReactNode & ReactNode[]
}

export default function CustomMarkdownPre({children}:ICustomMarkdownPreProps){
    const [isVisible, setIsVisible] = useState(false)

    //@ts-ignore
    const getNodeText = (node:ReactNode | ReactNode[]) => {
        if (["string", "number"].includes(typeof node)) return node
        if (node instanceof Array) return node.map(getNodeText).join("")
        //@ts-ignore
        if (typeof node === "object" && node) return getNodeText(node.props.children)
    }

    return (
        <div className={s["pre-container"]}
            onMouseEnter={()=>setIsVisible(true)}
            onMouseLeave={()=>setIsVisible(false)}
        >
            <CopyButton isVisible={isVisible}  textToCopy={getNodeText(children)}/>
            <pre>
                {children}
            </pre>
        </div>
    )
}