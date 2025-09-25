import { ReactNode, useState } from "react"
import "./Tooltip.scss"

export interface ITooltipProps {
    delay?: number;
    position?: string;
    content: ReactNode;
    children: ReactNode;
    className?: string;
    toolTipType?: "onClick" | "onMouseEnter"
}

const Tooltip = ({ delay = 400, position = "top", toolTipType = "onMouseEnter", content, children, className = "", ...props }: ITooltipProps) => {
    const [active, setActive] = useState(false)
    let timeout: any

    const show = () => {
        timeout = setTimeout(() => {
            setActive(true)
        }, delay)
    }

    const hide = () => {
        clearTimeout(timeout)
        setActive(false)
    }

    const showHide = () => {
        setActive(true)

        setTimeout(()=>{
            setActive(false)
        }, delay * 4)
    }

    return (
        <div className={`tooltip ${toolTipType === "onClick" ? "tooltip__cursor--point" : ""} ${className}`}
            onMouseEnter={toolTipType === "onMouseEnter" ? show : ()=>{}}
            onMouseLeave={toolTipType === "onMouseEnter" ? hide : ()=>{}}
            onClick={toolTipType === "onClick" ? showHide : ()=>{}}
            {...props}
        >
            {children}
            <div className={`tooltip__custom__content tooltip__content--${position} ${active && "tooltip__content--visible"}`}>
                {content}
            </div>
        </div>
    )
}

export default Tooltip
