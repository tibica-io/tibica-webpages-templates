import mdConfig from "../../../mdConfig.json"
import { ITopic } from "../../types/topicTypes"

export const topicsAPI = {
    fetchAllTopics: async function ():Promise<ITopic[]> {
        const fetchMarkdownContent = async (filePath:string) => {
            try {
                const response = await fetch(`${window.location.origin}/${filePath}`)
                if (!response.ok) {
                    throw new Error(`Failed to fetch MD file: ${response.statusText}`)
                }

                const contentType = response.headers.get("Content-Type")
                if (contentType && contentType.includes("text/html")) {
                    throw new Error("Expected markdown content, but received HTML")
                }

                const markdownContent = await response.text()
                return markdownContent
            } catch (error) {
                console.error("Error fetching MD file:", error)
            }
        }
    
        const markdownContentArray:ITopic[] = []
    
        for(const topic of mdConfig){
            const { file } = topic
        
            try {
                const content = await fetchMarkdownContent(file)
                if(content){
                    const topicWithContent: ITopic = { ...topic, markdownContent: content }
                    markdownContentArray.push(topicWithContent)
                } else{
                    const topicWithError: ITopic = { ...topic, error: "Error fetching MD file" }
                    markdownContentArray.push(topicWithError)
                }
            } catch (error) {
                console.error("Error loading MD file:", error)
            }
        }

        return markdownContentArray
    }
}
