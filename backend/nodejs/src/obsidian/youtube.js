import { arrsFromDicts, rowsFromDicts, updateKeys } from 'jnj-lib-base'
import { Youtube } from "jnj-lib-google";
import { getEnv } from "../utils/env.js";

const { GOOGLE_USER_NAME } = getEnv(); // APP_ROOT_DIR: 시스템 환경 설정 변수
console.log(`GOOGLE_USER_NAME: ${GOOGLE_USER_NAME}`)

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


const youtube = new Youtube(GOOGLE_USER_NAME);
// const youtube = new Youtube("bigwhitekmc");
await youtube.init();

// const playlistId = "PLnAbm0LaZMdMhg5yCz33RiVvEM8pAMb5b";
const playlistId = "PL-KPFbwFiAWA3bR3QSK3w6r_XM0KRzEFl";
let videos = await youtube.videosByPlaylist(playlistId);

const propertyKeys = ["video_title", "video_url", "thumnail", "description", "playlist_url", "channel_name", "channel_url", "categories", "tags", "related_notes", "published", "view_dates", "likeability", "difficulty"]

const valMap = {
    "playlist_url": `https://www.youtube.com/playlist?list=${playlistId}`,
    "channel_name": "북트레이싱",  // 변수
    "channel_url": "https://www.youtube.com/@booktracing",  // 변수
    "categories": "- 생산성 도구\n   - 메모", 
    "tags": "  - 옵시디언\n    - 지식관리\n    - 세컨드_브레인",
    "related_notes": "[[00_옵시디언 사용법 A to Z]]",
    "view_dates": "  - 2024-05-12",
    "likeability": "3",
    "difficulty": "1"
}

let maps = {}
for (const [key, value] of Object.entries(videos[0])) {
    maps[key] = key
}
maps.videoId = "video_url"
maps.title = "video_title"
for (const [key, value] of Object.entries(valMap)) {
    maps[key] = key
}

videos = stripThumnailUrl(videos).map(video => {
    return updateKeys(video, maps, valMap)
})

videos = videos.map((video) => {
    video.video_url = `https://www.youtube.com/watch?v=${video.video_url}`
    return video
})

// videos = rowsFromDicts(videos, [["videoId", "title", "publishedAt", "test"], ["videoId", "video_title", "published", "test"]])
console.log(JSON.stringify(videos[0]));
