import React, { ReactNode } from "react"
import styles from "./AccordionItem.module.scss"
import classNames from "../../../utils/classNames"
import { Icon } from "@perfsys-io/uikit"


export interface IAccordionItemProps {
    title: string;
    isActive?: boolean;
    onToggle?: () => void;
    children: ReactNode;
    className?: string;
    collapseHeader?: boolean;
}

const AccordionItem: React.FC<IAccordionItemProps> = (
    {
        title,
        isActive,
        onToggle = () => {},
        children,
        className,
        collapseHeader
    }
) => {
    return (
        <div className={classNames(
            styles["item"],
            { [`${styles["item--active"]}`]: isActive },
            { [`${className}`]: className }
        )}>
            <div
                className={classNames(styles["item__header"], { [`${styles["item__header--collapsed"]}`]: collapseHeader })}
                onClick={onToggle!}
            >
                <h3 className={styles["item__title"]}>
                    {title}
                    <Icon name="chevronDown" className={styles["item__arrow"]}/>
                </h3>
            </div>

            <div className={styles["item__content"]}>
                <div className={styles["item__content-inner"]}>{children}</div>
            </div>
        </div>
    )
}

export default AccordionItem
