//This operation is REQUIRED to build Tibica-Docs project
//This script copies all files found in mdConfig.json to "public/" folder

import fs from "fs"
import path from "path"
import { execSync } from "child_process"

const mdConfigPath = "./mdConfig.json"
const publicFolderPath = "./public"

const mdConfigContent = fs.readFileSync(mdConfigPath, "utf-8")
const mdConfig = JSON.parse(mdConfigContent)

mdConfig.forEach((config) => {
    try{
        const { file } = config
        const filePath = path.resolve(file)

        const lastDateUpdated = fs.statSync(filePath).mtime
        config.lastDateUpdated = lastDateUpdated

        const destinationFilePath = path.resolve(path.join(publicFolderPath, file))
        const destinationFolder = path.resolve(path.dirname(path.join(publicFolderPath, file)))

        if (!fs.existsSync(destinationFolder)) {
            execSync(`mkdir -p ${destinationFolder}`)
        }
    
        fs.copyFileSync(filePath, destinationFilePath)
    }
    catch(e){
        console.error("File not found or something is wrong with mdConfig.json.")
        console.log("File that has error: ", config)
    }
})


const updatedConfig = JSON.stringify(mdConfig, null, 4)
fs.writeFileSync(mdConfigPath, updatedConfig)
