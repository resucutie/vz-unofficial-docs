import fs from "fs"
import path from 'path'
import colors from 'colors'
import readline from'readline'

readline.emitKeypressEvents(process.stdin); if (process.stdin.isTTY) process.stdin.setRawMode(true)

export default function (props) {
    let { url, destination, name, progress } = props
    let loader;
    return new Promise((resolve, reject) => {
        if (!name) name = url.split("/")[url.split("/").length - 1]
        let savewhere = path.join(destination, name)

        const protocol = url.split("/")[0] === "http:" ? require('http') : require('https')

        const file = fs.createWriteStream(savewhere);

        const request = protocol.get(url)

        request.on('response', (response) => {
            if (response.statusCode !== 200) {
                onEnd(true)
                reject(`${progress ? progress.current + "/" + progress.proglength + ": " : ""}Couldn't download ${name.red} from ${url.gray}. Host retuned ${response.statusCode}`)
                return
            }

            response.pipe(file)
        })

        request.on('error', (err) => {
            onEnd(true)
            console.error(`${progress ? progress.current + "/" + progress.proglength + ": " : ""}Couldn't download ${name.red} from ${url.gray}`)
            reject(err)
        })

        file.on('ready', () => {
            const chars = [".   ", "..  ", "... ", " ...", "  ..", "   .", "    ", "˙   ", "˙˙  ", "˙˙˙ ", " ˙˙˙", "  ˙˙", "   ˙", "   "]
            const colorRandom = ["brightWhite", "brightRed", "brightGreen", "yellow", "cyan", "brightMagenta"]
            let cnt = -1;
            let colorcnt = 0

            loader = setInterval(() => {
                cnt++
                if (cnt === chars.length) { cnt = 0; colorcnt++ }
                if (chars[cnt] === "    ") colorcnt++
                if (colorcnt === colorRandom.length) { colorcnt = 0 }
                process.stdout.write(`\r${progress ? progress.current + "/" + progress.proglength + ": " : ""}Downloading from ${url.gray} ${colors.bold[colorRandom[colorcnt]](chars[cnt])}`)
            }, 75);

            if (process.stdin.listenerCount('keypress') > 0) process.stdin.removeAllListeners('keypress')

            process.stdin.on('keypress', (chunk, key) => {
                if (key?.ctrl && key?.name === 'c') {
                    file.destroy()
                    onEnd(fs.existsSync(savewhere))
                    if (key?.shift) process.exit()
                    reject(`${progress ? progress.current + "/" + progress.proglength + ": " : ""}${name.gray} was manually skipped`)
                }
            });
        })

        file.on('finish', function () {
            clearInterval(loader); readline.clearLine(process.stdout, 0); readline.cursorTo(process.stdout, 0, null);
            file.close(() => console.log(`${progress ? progress.current + "/" + progress.proglength + ": " : ""}${name.green} was downloaded sucessfully in ${savewhere.gray}`))
            resolve(savewhere)
        })

        file.on('error', (err) => {
            onEnd(true)
            console.error(`${progress ? progress.current + "/" + progress.proglength + ": " : ""}Couldn't download ${name.red} from ${url.gray}`)
            reject(err)
        })

        function onEnd(destroyFile) {
            if (destroyFile) unlinkFile(savewhere, name)

            clearInterval(loader);
            readline.clearLine(process.stdout, 0);
            readline.cursorTo(process.stdout, 0, null);
        }

        function unlinkFile(where, name) {
            fs.promises.unlink(where).catch(err => console.log(`${progress ? progress.current + "/" + progress.proglength + ": " : ""}Tried to remove the file ${name.red}, but an error happened:`, err))
        }
    })
}