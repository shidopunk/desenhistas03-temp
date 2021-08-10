import { Injectable } from "@angular/core";
import { Participantes } from "./participantes";

@Injectable({
  providedIn: "root"
})
export class ParticipantesService {
  retrieveAll(): Participantes[] {
    return PARTICIPANTES.sort((a, b) => {
      return a.points < b.points ? 1 : b.points < a.points ? -1 : 0;
    });
  }
}

var PARTICIPANTES: Participantes[] = [
  {
    name: "Ariel",
    points: 0,
    victory: 0,
    picture:
      "https://c4.wallpaperflare.com/wallpaper/799/516/893/samurai-champloo-mugen-anime-illustration-wallpaper-thumb.jpg",
    events: 0
  },
  {
    name: "Çedilha",
    points: 0,
    victory: 0,
    picture:
      "https://cdn.suwalls.com/wallpapers/anime/fuu-samurai-champloo-44558-400x250.jpg",
    events: 0
  },
  {
    name: "Yamada",
    points: 0,
    victory: 0,
    picture:
      "https://64.media.tumblr.com/e7f33f89ed5a84f7a2f6983665f5d067/tumblr_oyn4j2MIWP1vy2tgqo6_400.jpg",
    events: 0
  },
  {
    name: "Lucas",
    points: 0,
    victory: 0,
    picture:
      "https://64.media.tumblr.com/ece5e18e6382f48ad645fc332422b763/tumblr_olklg1r0il1vy2tgqo8_400.jpg",
    events: 0
  },
  {
    name: "Pedro",
    points: 0,
    victory: 0,
    picture:
      "https://3.bp.blogspot.com/-x2ZDLEMoz_E/UHBAMPiDOPI/AAAAAAAAIIU/gyxbjx2Yjtc/s1600/Roronoa+Zoro+1.png",
    events: 0
  },
  {
    name: "Wallace",
    points: 0,
    victory: 0,
    picture:
      "https://i1.wp.com/www.otakupt.com/wp-content/uploads/2019/01/Como-seria-um-anime-de-The-Legend-of-Zelda-.jpg?fit=640%2C360&ssl=1",
    events: 0
  },
  {
    name: "Gustavo",
    points: 0,
    victory: 0,
    picture: "https://live.staticflickr.com/8028/7576348908_2018a7d729_c.jpg",
    events: 0
  },
  {
    name: "Lar",
    points: 0,
    victory: 0,
    picture:
      "https://64.media.tumblr.com/40448580ad06dbe3ae0dd49a5e1cd2a6/tumblr_pm9m3yqux11x73yfbo3_400.jpg",
    events: 0
  },
  {
    name: "Neri",
    points: 0,
    victory: 0,
    picture:
      "https://64.media.tumblr.com/349f738502e43707dda1a61a10d5bef8/45c7a2d9a5d3642a-18/s640x960/c0a1dca8b60d21df8af885553c961fd5012ecf4f.jpg",
    events: 0
  },
  {
    name: "Juice",
    points: 0,
    victory: 0,
    picture:
      "https://i1.wp.com/www.otakupt.com/wp-content/uploads/2018/12/10-personagens-anime-mais-encantadores-de-2018-6.jpg?resize=696%2C390&ssl=1",
    events: 0
  },
  {
    name: "Letícia",
    points: 0,
    victory: 0,
    picture:
      "https://cdn.discordapp.com/attachments/850192781804699713/865756152640831519/IMG-20210716-WA0124.jpg",
    events: 0
  },
  {
    name: "Denise",
    points: 0,
    victory: 0,
    picture:
      "https://i.pinimg.com/564x/c3/ce/73/c3ce73d27a11bc681d6f21eb3531faff.jpg",
    events: 0
  },
  {
    name: "Limora",
    points: 0,
    victory: 0,
    picture:
      "https://i.pinimg.com/564x/99/9b/1d/999b1dd6620acbdfcfead5bd56aaa831.jpg",
    events: 0
  },
  {
    name: "Hehehe",
    points: 0,
    victory: 0,
    picture:
      "https://i.pinimg.com/originals/a1/a4/83/a1a48378d4ea275e5e52410b3a008a8b.jpg",
    events: 0
  },
  {
    name: "Aiska",
    points: 0,
    victory: 0,
    picture:
      "https://i.pinimg.com/236x/05/7c/90/057c908b515a4b8263e987a1870e4595.jpg",
    events: 0
  },
  {
    name: "William",
    points: 0,
    victory: 0,
    picture:
      "https://images6.fanpop.com/image/photos/43100000/Guts-berserk-the-anime-manga-43133551-300-290.jpg",
    events: 0
  }
];
