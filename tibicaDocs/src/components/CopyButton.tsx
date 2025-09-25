import s from "./CopyButton.module.scss"
import { FormOutlined } from "@ant-design/icons"
import Tooltip from "./Tooltip"

interface ICopyButtonProps{
    textToCopy:string
    isVisible:boolean
}

export default function CopyButton ({ textToCopy, isVisible = true }: ICopyButtonProps){
    const handleCopyClick = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy)
            console.log("Code copied!")
        } catch (err) {
            console.error("Unable to copy code", err)
        }
    }

    return (
        <div className={s["btn-container"]}>
            <Tooltip 
                toolTipType="onClick"
                content={"copied"} 
                children={
                    <FormOutlined className={`${s["copy-btn"]} ${isVisible ? s["visible"] : ""}`} onClick={handleCopyClick}/>
                }
            />
        </div>
    )
}