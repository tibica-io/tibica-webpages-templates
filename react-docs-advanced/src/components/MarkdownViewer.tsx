import ReactMarkdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import { ITopic } from "../types/topicTypes"
import * as dateFns from "date-fns"
import { Typography } from "antd"
import s from "./MarkdownViewer.module.scss"
import CustomMarkdownPre from "./CustomMarkdownPre"
import ErrorPage from "../pages/ErrorPage"

const { Text } = Typography

interface IMarkdownViewerProps{
    currentTopic:ITopic,
    handleStringsArray:(data:string)=>void,
    contentContainer: HTMLElement
}

export default function MarkdownViewer({ currentTopic, handleStringsArray }:IMarkdownViewerProps) {
    if(!currentTopic.markdownContent && currentTopic.error){
        const errorMessage = (
            <div style={{display:"flex", flexDirection:"column"}}>
                <span>
                    Error: {currentTopic.error}
                </span>
                <span>
                    The provided <b>file path</b> may be incorrect, or the file may not have the required <b>.md</b> format
                </span>
                <span>Current path to file: <b>{currentTopic.file}</b></span>
            </div>
        )
        return (
            <ErrorPage errorMessage={errorMessage}/>
        )
    }

    return (
        <>
            {
                currentTopic.markdownContent && !currentTopic.error &&
                    <ReactMarkdown
                        className="markdown-body"
                        rehypePlugins = {[rehypeRaw, rehypeHighlight]}
                        remarkPlugins = {[remarkGfm]}
                
                        components={{
                            h1({children,  ...props}){
                                const tagName = String(...children)
                                handleStringsArray(tagName)
                
                                const strWithoutSpaces = tagName.replace(/ /g, "-")
                
                                return (
                                    <>
                                        <h1 id={`${strWithoutSpaces}`} {...props}>
                                            {children}
                                        </h1>
                
                                        {
                                            currentTopic.lastDateUpdated && 
                                                    <Text type="secondary" className={s["last-date-updated"]}>
                                                        Last modified: { dateFns.format(currentTopic.lastDateUpdated, "d MMMM yyyy") }
                                                    </Text>
                                        }
                                    </>
                                )
                            },
                            h2({children, ...props}){
                                const tagName = String(...children)
                                handleStringsArray(tagName)
                
                                const strWithoutSpaces = tagName.replace(/ /g, "-")
                                return (
                                    <h2 id={`${strWithoutSpaces}`} {...props}>
                                        {children}
                                    </h2>
                                )
                            },
                            pre({children}){
                                return (
                                    <CustomMarkdownPre children={children}/>
                                )
                            }
                        }}
                    >
                        {currentTopic.markdownContent}
                    </ReactMarkdown>
            }   
        </>
    )
}