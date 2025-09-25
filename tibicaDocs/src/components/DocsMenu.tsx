import "./DocsMenu.scss"
import type { MenuProps } from "antd"
import { Menu } from "antd"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useAppSelector } from "../store"
import { ITopic } from "../types/topicTypes"

type MenuItem = Required<MenuProps>["items"][number];

const DocsMenu = () => {
    const { file_url } = useParams()

    const topics:ITopic[] = useAppSelector(selector=>selector.topics.entities)
    const [items, setItems] = useState<MenuItem[]>()

    useEffect(()=>{
        setItems(topics.map((item)=>{
            const {menuName, url} = item

            return {
                label: <Link to={url}>{menuName}</Link>,
                key: url,
                className:"custom-menu-item"
            }
        }))
    }, [topics, file_url])

    return (
        <Menu
            selectedKeys={file_url ? [file_url] : []}
            defaultSelectedKeys={["0"]}
            mode="inline"
            items={items}
        />
    )
}

export default DocsMenu