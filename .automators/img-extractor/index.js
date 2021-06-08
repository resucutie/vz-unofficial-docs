import fs from "fs"
import path from 'path'
import colors from 'colors'
import extractLinks from 'markdown-link-extractor'
import downloader from "./downloader"

const IMAGE_REGEX = /\.(jpeg|jpg|gif|png|webp)$/g
// let timecounter = 0

// setImmediate(() => {timecounter++}, 1000)

function init(dirpath) {
    let sucessfulFiles = []
    let counter = 0

    return new Promise(async (resolve, reject) => {
        //Gets all files
        const filelist = readDir(dirpath).flat(Infinity)

        //Loop from every file
        for (const file of filelist) {
            counter++
            
            //Calculate the percentage
            const percentage = (counter / filelist.length) * 100
            console.log(`${(percentage.toFixed(2) + "%").brightGreen}: Reading file ${path.parse(file).base.cyan} from ${path.dirname(file).underline.yellow}`)

            //Read the file and extract all the images
            let readFile = await fs.promises.readFile(file, "utf-8")
            let links = extractLinks(readFile)
            let images = links.filter(link => {
                if (link.includes("assets")) return false
                if (link.match(IMAGE_REGEX)) return true
            })

            if (images.length > 0) {
                console.log(`Found ${images.length.toString().brightYellow} image${images.length > 1 ? "s" : ""}:`, images)

                let sucessfulImages = []
                let downloadedImagePaths = []

                let imgcount = 0

                for (const img of images) {
                    imgcount++
                    try {
                        let downloadir = await downloader({
                            url: img,
                            destination: `${__dirname}/../../../assets`,
                            progress: {
                                current: imgcount,
                                proglength: images.length
                            }
                        })
                        sucessfulImages.push(img)
                        downloadedImagePaths.push(toPosixPath(path.relative(file, downloadir)).substring(3))
                    } catch (e) {
                        console.error(e, "\nSkipping file...")
                    }
                }

                if (downloadedImagePaths.length > 0) {
                    sucessfulFiles.push({
                        file,
                        urls: sucessfulImages,
                        paths: downloadedImagePaths
                    })
                }
            } else {
                console.log("Not found")
            }
            console.log("\n")
        }
        resolve(sucessfulFiles)
    })
}

function toPosixPath (pathStr) {
    return pathStr.split(path.sep).join(path.posix.sep)
}

function readDir(dir, fileList = []) {
    fs.readdirSync(dir).filter(x => path.basename(x)[0] !== ".").forEach(file => {
        const filePath = path.join(dir, file)

        if (path.basename(filePath).match(IMAGE_REGEX)) return

        fileList.push(
            fs.statSync(filePath).isDirectory()
                ? readDir(filePath)
                : filePath
        )
    })
    return fileList
}

function editFiles(files){
    return new Promise(async (resolve, reject) => {
        for (const file of files) {
            console.log("\n")
            const name = path.parse(file.file).base
            const folder = path.dirname(file.file)
            
            const crazystuff = path.join(folder, "a")
            const coloredpath = (crazystuff.substr(0, crazystuff.length - 1).yellow + name.cyan).underline

            const copyfolder = path.join(folder, ".backup")

            if (!fs.existsSync(copyfolder)) {
                console.log(`${folder.underline.yellow}: Making backup folder`)
                await fs.promises.mkdir(copyfolder)
            }
            
            console.log(`${coloredpath}: Reading file`)
            const content = await fs.promises.readFile(file.file, "utf-8")
            
            console.log(`${coloredpath}: Making backup of the file`)
            await fs.promises.writeFile(path.join(copyfolder, name), content)

            console.log(`${coloredpath}: Copying and editing the URLs`)
            let editedContent = content

            for (var i = 0; i < file.urls.length; i++) {
                editedContent = editedContent.replaceAll(file.urls[i], file.paths[i])
            }

            console.log(`${coloredpath}: Writing modified changes`)
            await fs.promises.writeFile(file.file, editedContent)
        }
        resolve()
    })
}

init("../../modules/components").then(async files => {
    console.log("Initiating the file editing")
    await editFiles(files)

    // const h = Math.floor(timecounter / 3600);
    // const m = Math.floor((timecounter % 3600) / 60);
    // const s = Math.round(timecounter % 60);

    console.log(`\n`)

    process.exit()
})