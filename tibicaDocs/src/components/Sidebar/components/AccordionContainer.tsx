import React, { Children, cloneElement, isValidElement, ReactNode, useEffect, useState } from "react"
import { IAccordionItemProps } from "./AccordionItem"
import styles from "./AccordionContainer.module.scss"

interface IAccordionContainerProps {
    children: ReactNode;
    activeIndex?: number;
    isOpen?: boolean;
}

const AccordionContainer: React.FC<IAccordionContainerProps> = ({ children, activeIndex = null, isOpen }) => {
    const [active, setActive] = useState<number | null>(null)

    useEffect(() => {
        setActive(isOpen ? activeIndex : 0)
    }, [isOpen, activeIndex])

    const handleToggle = (index: number) => {
        setActive((prevIndex) => (prevIndex === index ? null : index))
    }

    const accordionItems = Children.map(children, (child, index) => {
        if (isValidElement<IAccordionItemProps>(child)) {
            return cloneElement(child, {
                isActive: active === index,
                onToggle: () => handleToggle(index),
                collapseHeader: !isOpen
            })
        }
        return null
    })

    return <div className={styles.container}>{accordionItems}</div>
}


export default AccordionContainer
