import s from "./Sidebar.module.scss"
import { useEffect, useState } from "react"
import { Icon, IconButton } from "@perfsys-io/uikit"
import AccordionContainer from "./components/AccordionContainer"
import classNames from "../../utils/classNames"
import useWindowSize from "../../hooks/useWindowSize"
import { ReactComponent as LogoIcon } from "../../assets/images/logo.svg"
import { ReactComponent as TibicaIcon } from "../../assets/images/tibica.svg"
import { ITopic } from "../../types/topicTypes"
import { useAppSelector } from "../../store"
import { Link, useParams } from "react-router-dom"


function Sidebar() {
    const [isOpen, setIsOpen] = useState(true)
    const [isDesktop, setIsDesktop] = useState(true)
    const { width: screenWidth } = useWindowSize()
    const topics:ITopic[] = useAppSelector(selector=>selector.topics.entities)
    const {file_url} = useParams()

    useEffect(() => {
        if (!isDesktop && isOpen) {
            setIsOpen(false)
        }
    }, [isDesktop])


    useEffect(() => {
        setIsDesktop(screenWidth > 992)
    }, [screenWidth])


    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }


    return (
        <div className={classNames(s["sidebar"], { [s["sidebar--closed"]]: !isOpen })}>
            <div className={s["sidebar__header"]}>
                <div className={s["sidebar__row"]}>
                    <a className={s["sidebar__logo"]} href="/">
                        <LogoIcon/>
                        <div className={s["sidebar__logo-text"]}>
                            <TibicaIcon/>
                        </div>
                    </a>

                    <div className={s["sidebar__controls"]}>
                        <IconButton
                            icon={isDesktop ? "chevronDoubleLeft" : "menu"}
                            className={s["sidebar__toggle"]} onClick={toggleSidebar}
                        />
                    </div>
                </div>
            </div>

            <div className={s["sidebar__main"]}>
                <div className={s["sidebar__body"]}>
                    <AccordionContainer activeIndex={0} isOpen={isOpen}>
                        {
                            isOpen &&
                            <div className={s["nav"]}>     
                                {
                                    topics.map((topicItem, index)=>{
                                        const {url, menuName} = topicItem
                                        const isNavActive = file_url === url

                                        return (
                                            <Link
                                                onClick={()=>!isDesktop && setIsOpen(false)}
                                                to={url}
                                                key={index}
                                                className={classNames(s["nav__item"], { [s["nav__item--active"]]: isNavActive })}
                                            >
                                                <div className={s["nav__icon"]}>
                                                    <Icon name={"file"}/>
                                                </div>
                                                <div className={s["nav__content"]}>
                                                    { menuName }
                                                </div>
                                            </Link>  
                                        )
                                    })
                                }
                                {/*{installedApps.map((app) => {*/}
                                {/*    const currentApp = app.application_alias.toLowerCase();*/}
                                {/*    const isNavActive = currentApp === 't.site';*/}
                                {/*    const appLink = currentApp === 't.home' ? window.location.origin : `${window.location.origin}/${currentApp}/`;*/}
                      
                                {/*    return (*/}
                                {/* <a href={appLink}*/}
                                {/*           key={app.application_alias}*/}
                                {/*           className={classNames(s['nav__item'], { [s['nav__item--active']]: isNavActive })}*/}
                                {/*        >*/}
                                {/*            <div className={s['nav__icon']}>*/}
                                {/*                <Icon name={app.application_alias}/>*/}
                                {/*            </div>*/}
                                {/*            <div className={s['nav__content']}>*/}
                                {/*                <span>{app.application_alias}</span>*/}
                                {/*            </div>*/}
                                {/*        </a>*/}
                                {/*    );*/}
                                {/*})} */}
                            </div>
                        }
                    </AccordionContainer>
                </div>

                {isOpen &&
                  <div className={s["sidebar__footer"]}>
                      {/*<ProfilePreview*/}
                      {/*  name={totalData.username}*/}
                      {/*  nickname={totalData.company_name}*/}
                      {/*  avatar={totalData.avatar}*/}
                      {/*/>*/}
                  </div>
                }
            </div>
        </div>
    )
}

export default Sidebar
