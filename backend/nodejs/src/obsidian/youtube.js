import { arrsFromDicts, rowsFromDicts, updateKeys, saveFile } from 'jnj-lib-base'
import { Youtube } from "jnj-lib-google";
import { getEnv } from "../utils/env.js";

const { GOOGLE_USER_NAME } = getEnv(); // APP_ROOT_DIR: 시스템 환경 설정 변수
console.log(`GOOGLE_USER_NAME: ${GOOGLE_USER_NAME}`)
const youtube = new Youtube(GOOGLE_USER_NAME);
await youtube.init();


const stripThumnailUrl = (objs) => {
    /*
    "thumbnail": "=image(\"https://i.ytimg.com/vi/k_p5h4Tf0ZM/hqdefault.jpg\")",
    =>
    "thumbnail": "https://i.ytimg.com/vi/k_p5h4Tf0ZM/hqdefault.jpg",
    */
    return objs.map((item) => {
      const regex = /=image\("(.+?)"\)/;
      const found = item["thumbnail"].match(regex);
      item["thumbnail"] = found ? found[1] : item["thumbnail"];
      return item
    })
}

function sanitizeFilename(filename, to="_") {
    return filename.replace(/[\<\>:"/|?*]/g, to);
}


const getProperties = async ({playlistId, defaults}) => {
    let videos = await youtube.videosByPlaylist(playlistId);
    let maps = {}
    for (const [key, value] of Object.entries(videos[0])) {
        maps[key] = key
    }
    maps.videoId = "video_url"
    maps.title = "video_title"
    for (const [key, value] of Object.entries(defaults)) {
        maps[key] = key
    }
    
    let properties = stripThumnailUrl(videos).map(video => {
        return updateKeys(video, maps, defaults)
    })
    
    return properties.map((property) => {
        property.video_url = `https://www.youtube.com/watch?v=${property.video_url}`
        return property
    })
}

const frontMatter = (property) => {
    const entries = Object.entries(property).map(([key, value]) => {
        value = (key === "description") ? value.split("\n")[0] : value
        return !value.includes("\n") && /[^0-9,]/.test(value) ? `${key}: "${value}"` : `${key}: ${value}`
        // return (!value.includes("\n") && !/[^0-9,]/.test(value))? `${key}: "${value}"` : `${key}: ${value}`
    })
    return `---\n${entries.join("\n")}\n---\n`
}



// * TEST
const playlistId = "PL-KPFbwFiAWA3bR3QSK3w6r_XM0KRzEFl";
const defaults = {
    "playlist_url": `https://www.youtube.com/playlist?list=${playlistId}`,
    "channel_name": "북트레이싱",  // 변수
    "channel_url": "https://www.youtube.com/@booktracing",  // 변수
    "categories": "\n   - 생산성 도구\n   - 메모", 
    "tags": "\n   - 옵시디언\n   - 지식관리\n   - 세컨드_브레인",
    "related_notes": "[[00_옵시디언 사용법 A to Z]]",
    "view_dates": "\n   - 2024-05-12",
    "likeability": "3",
    "difficulty": "1"
}

const propertyKeys = ["video_title", "video_url", "thumnail", "description", "playlist_url", "channel_name", "channel_url", "categories", "tags", "related_notes", "published", "view_dates", "likeability", "difficulty"]
const properties = await getProperties({playlistId, defaults})
// const properties = (await getProperties({playlistId, defaults})).map(property => {
//     return updateKeys(property, propertyKeys, {})
// })

const videos = rowsFromDicts(properties, [propertyKeys, propertyKeys])
console.log(JSON.stringify(videos.slice(0,2)));

// saveFile(`/Users/youchan/Library/CloudStorage/GoogleDrive-mooninone@gmail.com/내 드라이브/Obsidian/jnj-soft/TOOLS/obsidian/옵시디언 사용법 A to Z/${sanitizeFilename(properties[0].video_title)}.md`, frontMatter(properties[0]), "utf-8")

// // videos = rowsFromDicts(videos, [["videoId", "title", "publishedAt", "test"], ["videoId", "video_title", "published", "test"]])
// // console.log(JSON.stringify(properties[0]));
// const test = Object.entries(properties[0]).map(([key, value]) => {
//     return `${key}: ${value}`
// })

// console.log(test)
