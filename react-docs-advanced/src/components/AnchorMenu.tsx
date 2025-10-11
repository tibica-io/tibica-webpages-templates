import { Anchor } from "antd"
import "./AnchorMenu.scss"

interface IAnchorMenuProps{
    anchorStringArray: string[]
    contentContainer: HTMLElement
}

export default function AnchorMenu({ anchorStringArray, contentContainer }: IAnchorMenuProps){
    if(anchorStringArray.length < 2){
        return (
            <></>
        )
    }
    
    return (
        <Anchor
            getContainer={()=> contentContainer}
            offsetTop={20}
            targetOffset={20}
            bounds={50}
            items={
                anchorStringArray.map((anchorName)=>{
                    const strWithoutSpaces = anchorName.replace(/ /g, "-")

                    return {
                        key:strWithoutSpaces,
                        href:`#${strWithoutSpaces}`,
                        title:anchorName
                    }
                })
            }
        />
    )
}
