const daySelect = document.getElementById("day-select");
const timeline = document.getElementById("timeline");

const tripDays = [
  {
    date: "2026/02/25",
    title: "第1天",
    stops: [
      {
        id: "d1-1",
        time: "20:50",
        title: "那霸機場",
        subtitle: "抵達沖繩",
        description: "入境、行李提領與交通銜接。",
        stay: 40,
        location: "Naha Airport",
        image:
          "data:image/jpeg;base64,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",
        notes:
          "行李提領與交通轉乘。可先在到達層上廁所，確認手機網卡。",
        extra: "",
      },
      {
        id: "d1-2",
        time: "21:48",
        title: "Torikizoku 美栄橋",
        subtitle: "晚餐",
        description: "日本全國連鎖居酒屋,推薦：鹽烤雞肉串、雞腿串。",
        stay: 0,
        location: "Naha",
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer1b5p3YdsdNdQIsnNpL3eP1ng44ei_ScEVVGyQO_6M6QFevPuPDKdWRbX6DTpovCopOt471e9kPPgh-6adVV5B97SBiagKXJEdm_Cv7S6NmKxSb85pTApn0hPUXStzWoG33o82HFRiraxr=w408-h558-k-no",
        notes:
          "晚餐。串燒小份量，必點經典雞腿、雞皮與蔬菜串",
        extra: "",
      },
      {
        id: "d1-3",
        time: "21:53",
        title: "那霸久茂地里士滿飯店",
        subtitle: "Richmond Hotels Naha Kumoji",
        description: "入住放行李，簡單整理。",
        stay: 60,
        location: "Kumoji",
        image:
          "https://lh3.googleusercontent.com/p/AF1QipPmywZBkbVi2OEgVtPLlnU-UpSX4YPHeq2hMAwp=w408-h264-k-no",
        notes:
          "入住與休息。市區交通方便，可先補充飲水、充電，整理隔日行程與路線。",
        extra: "",
      },
      {
        id: "d1-4",
        time: "22:57",
        title: "MaxValu Matsuyama",
        subtitle: "宵夜補給",
        description: "採買明日早餐與飲料。",
        stay: 60,
        location: "Matsuyama",
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo76hWkz1Pfmrw_k13nf0sSBee1iPXiPpMD_MpgUsOjLTza-pnvB8mkTKruZoMkfP1ayU4HlN2i31WXfNHekgzBnf4QWC50gdnY5cxo6rBjXt22mp9imGrD4RK4jBGqQjhnnZw=w408-h306-k-no",
        notes:
          "採買零食與飲料。營業晚、品項齊，可買隔日早餐、牛奶與簡易日用品。",
        extra: "",
      },
    ],
  },
  {
    date: "2026/02/26",
    title: "第2天",
    stops: [
      {
        id: "d2-1",
        time: "08:30",
        title: "那霸久茂地里士滿飯店",
        subtitle: "出發",
        description: "退房與整理，準備取車。",
        stay: 0,
        location: "Kumoji",
        image:
          "https://lh3.googleusercontent.com/p/AF1QipPmywZBkbVi2OEgVtPLlnU-UpSX4YPHeq2hMAwp=w408-h264-k-no",
        notes:
          "整理行李。出發前確認租車文件 。",
        extra: "",
      },
      {
        id: "d2-2",
        time: "09:30",
        title: "Orix Rental Cars Miebashi",
        subtitle: "取車",
        description: "領車、確認保險與導航設定。",
        stay: 45,
        location: "Miebashi",
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AHVAweorAhoeE3kGhGHQVZ9hk-LHGYJuUTtYoRBO2BmcBD6QbN05Bbx2CTJSLUNQbxdJJgcuB_KIFsTVXjenjaqB1lXrsPVYBIzyasxnhABwa1c5EWMlvttU-9V57aLbTk44wT3MVEWMgLX0zCFd=w408-h306-k-no",
        notes:
          "辦理租車。拍照記錄車況，確認保險條件、加油規則與還車地點。",
        extra: "",
      },
      {
        id: "d2-3",
        time: "10:24",
        title: "波之上立體停車場",
        subtitle: "停車",
        description: "停車後步行前往神社。",
        stay: 0,
        location: "Naha",
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepn-6wcnUzj-YhnxYGqiUXsvzGZdHXNS1nxlvS_hatsDLY9PUoIZl3jjKO18OFo3ns_AH-xbxhCINphJAsKcFJMKl7y6OHBnytzHIrPsrjliaWVzfOVRL0tvh4ENU7II4NM3UHJxSp6kcek=w408-h544-k-no",
        notes:
          "步行前往神社。靠海停車點，注意日曬與海風，沿路可拍海景。",
        extra: "",
      },
      {
        id: "d2-4",
        time: "10:30",
        title: "波上宮",
        subtitle: "神社參拜",
        description: "沖繩代表性神社景點。",
        stay: 60,
        location: "Naha",
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep74gupv6clTLyPe2OUKcP-Ed8ceG_zbM75zNtcsQSK2mK8XsS3dR6KSb284JWfW7Ty3SDBOm3Je0T2qXg6dF4zjxDfmF4oT8A_bI-wSLFOz6fe9OF1gKvokq_qCWEMuomtDd3r-W3gsNw=w408-h306-k-no",
        notes:
          "參拜拍照。海景神社位置特殊，可拍海岸線與鳥居。",
        extra: "",
      },
      {
        id: "d2-5",
        time: "11:42",
        title: "SAN-A PARCO CITY",
        subtitle: "購物",
        description: "大型商場，採買與休息。",
        stay: 210,
        location: "Urasoe",
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer5Q8iOA9tjTQLlwhS04SPrnyK-zATcgwPk_FSCC_9iHu_b4Wr_01JI6JfFnQkcESW6myAAO418lyBd3ZiBcSTyeBvyropp7Y9yYAPN-Gg8Gf4BtNRa_jQ02dK739zDrnfRBhHY8nPHCl10=w408-h306-k-no",
        notes:
          "大型商場逛街。美食街選擇多，可逛服飾、生活雜貨與大型超市。",
        extra: "",
      },
      {
        id: "d2-6",
        time: "15:14",
        title: "A&W 浦添PARCO CITY店",
        subtitle: "午餐",
        description: "沖繩在地速食代表。",
        stay: 60,
        location: "Urasoe",
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqPhoK5EUJDDx-FuGHacvK01QG_wycScLZLAn-HZJJK5If-ACkyGbqCM-6ll4vzfvEaD-IMXkusJNSsg635IEBD6G0wPbw2MtVPrVD0G8orxGYoRJ_s5wckgZ9q1lJNUeOH29dMBV3QdX3l=w408-h307-k-no",
        notes:
          "經典美式速食，搭漢堡或炸物。",
        extra: "",
      },
      {
        id: "d2-7",
        time: "16:39",
        title: "Vessel Hotel Campana Okinawa Annex",
        subtitle: "入住",
        description: "海邊飯店，適合看夕陽。",
        stay: 60,
        location: "Chatan",
        image:
          "https://lh3.googleusercontent.com/p/AF1QipMo8HtyMArH-JjfuehMOODrV4vVUsnTS_Y5MGXz=w408-h408-k-no",
        notes:
          "海邊飯店。步行可到海邊，傍晚適合散步看夕陽。",
        extra: "",
      },
      {
        id: "d2-8",
        time: "17:43",
        title: "迴轉壽司市場 美浜店",
        subtitle: "晚餐",
        description: "晚餐補給，步行散步海邊。",
        stay: 60,
        location: "Mihama",
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoVUgZLiYXMS9ZJ-xuGWMWKlwHkfTy9M-X4zp4HSXiRv103VT4NBkDaEIZk9HTNmlpTINbxj9LUBHu77in9v5EgryBL-1GPCHME7ydmb1z1SwWch9_K6fIfOzSkEdpjoz1ds3jkgVjyZ14=w408-h306-k-no",
        notes:
          "壽司。人多時先取號，推薦鮭魚、鮪魚與當地白身魚。",
        extra: "",
      },
    ],
  },
  {
    date: "2026/02/27",
    title: "第3天",
    stops: [
      {
        id: "d3-1",
        time: "10:00",
        title: "Vessel Hotel Campana Okinawa Annex",
        subtitle: "出發",
        description: "整理行李後出發。",
        stay: 30,
        location: "Chatan",
        image:
          "https://lh3.googleusercontent.com/p/AF1QipMo8HtyMArH-JjfuehMOODrV4vVUsnTS_Y5MGXz=w408-h408-k-no",
        notes:
          "整理行李。早上可短暫看海，確認北上路線與停車點。",
        extra: "",
      },
      {
        id: "d3-2",
        time: "10:47",
        title: "AEON MALL Okinawa Rycom",
        subtitle: "購物",
        description: "規模大的購物中心。",
        stay: 180,
        location: "Kitanakagusuku",
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepe7osQ8uDhSeqULZNhJHci_HJsWDtrD6wbliCZ0A32mk-jyuseTHIjnfxH_vQLhL-WhnHYltr2GeuQ9Egl6_BO0X71XsV-b25ZXB6cAi2fSfF7PGGHonnLAXrbP_fA2q5_rfJTgess6WAu=w408-h544-k-no",
        notes:
          "大型商場採購。品牌齊全，適合補衣物、生活用品與伴手禮。",
        extra: "",
      },
      {
        id: "d3-3",
        time: "14:19",
        title: "琉球村",
        subtitle: "文化體驗",
        description: "體驗傳統沖繩文化。",
        stay: 120,
        location: "Onna",
        image:
          "https://lh3.googleusercontent.com/p/AF1QipOFpeSfgv7O8BhrRaw6FY-Iops8hjuQg791yluR=w426-h240-k-no",
        notes:
          "傳統文化園區。可看表演、試穿傳統服飾或手作體驗。",
        extra: "",
      },
      {
        id: "d3-4",
        time: "16:42",
        title: "萬座毛",
        subtitle: "海景",
        description: "著名海岸景觀。",
        stay: 60,
        location: "Onna",
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoUczG1HkunXtkP2BKz49f3oem8vKWUzVQytIfFiNN5chyPIsGtkA3Pvi4glbWT7usd9QJcFg5bX9zzt6MSgwlToCC4KPT2AH1EiEMJ4op-p16kEbDsl1gJPfr5WQoKo7zJ1Mw5MHcyYhhr=w408-h306-k-no",
        notes:
          "夕陽海岸。象鼻岩視角，風大注意安全。",
        extra: "",
      },
      {
        id: "d3-5",
        time: "18:12",
        title: "名護櫻之家飯店",
        subtitle: "入住",
        description: "北部住宿據點。",
        stay: 60,
        location: "Nago",
        image:
          "https://lh3.googleusercontent.com/p/AF1QipNjMIJFVtsggQXTvHFp5Y_FqhCxA1U3UbNyZbRJ=w408-h306-k-no",
        notes:
          "晚間休息。北部行程中繼點，早睡補體力。",
        extra: "",
      },
      {
        id: "d3-6",
        time: "19:14",
        title: "Nago Steak Okinawa",
        subtitle: "晚餐",
        description: "牛排晚餐。",
        stay: 60,
        location: "Nago",
        image:
          "https://lh3.googleusercontent.com/p/AF1QipM6NBXW7GuqDxt88hQCCkbvYq8GHUtbz0yY0GEb=w408-h306-k-no",
        notes:
          "牛排。份量足，建議預留停車時間，配湯與沙拉。",
        extra: "",
      },
      {
        id: "d3-7",
        time: "20:24",
        title: "金秀名護灣市場 Town Plaza Kanehide Nago Bay Market",
        subtitle: "採買",
        description: "補給食物與飲料。",
        stay: 60,
        location: "Nago",
        image:
          "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1200&q=80https://lh3.googleusercontent.com/gps-cs-s/AHVAweoTgNzrT9euJ6zR_NQAyla2RsyL2uGi0n93bdXSnOWp91boZgGstTRlNi-v9zOcAgy2_KFTCPHQOqjDPcWPNpryZ4E8ag40MiNrxP4PsiZUqiBU8t64flv1IgQJWOaM1e21NPed=w426-h240-k-no",
        notes:
          "補給。超市好買，補飲料水果與早餐。",
        extra: "",
      },
    ],
  },
  {
    date: "2026/02/28",
    title: "第4天",
    stops: [
      {
        id: "d4-1",
        time: "09:00",
        title: "名護櫻之家飯店",
        subtitle: "出發",
        description: "退房準備北上。",
        stay: 30,
        location: "Nago",
        image:
          "https://lh3.googleusercontent.com/p/AF1QipNjMIJFVtsggQXTvHFp5Y_FqhCxA1U3UbNyZbRJ=w408-h306-k-no",
        notes:
          "整理行李。今天行程多，出發前補水與防曬。",
        extra: "",
      },
      {
        id: "d4-2",
        time: "10:03",
        title: "古宇利海洋塔",
        subtitle: "展望",
        description: "俯瞰古宇利大橋。",
        stay: 60,
        location: "Kouri",
        image:
          "https://lh3.googleusercontent.com/p/AF1QipP8jV2LtRj7rtY1EZWkkX2lEp_u3LIhP-E_fAAM=w427-h240-k-no",
        notes:
          "海景拍照。俯瞰古宇利大橋，視野很好。",
        extra: "",
      },
      {
        id: "d4-3",
        time: "11:09",
        title: "古宇利島",
        subtitle: "海灘",
        description: "散步與拍照。",
        stay: 80,
        location: "Kouri",
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AHVAweopPP5DpavUigeT6aaHPA0QezIP9EfC7xa2qWxFw2826jZGMT8tvFg2VcyhYq0QhN3plp8MpqblIGaUYYIBiFvsPJKpcp8arUidJy_DIEckDWCQtuaVbgcU5-Y9eqgUDiVHXIWD8w=w408-h272-k-no",
        notes:
          "散步拍照。白沙海灘，適合短暫休憩與拍照。",
        extra: "",
      },
      {
        id: "d4-4",
        time: "12:35",
        title: "古宇利蝦蝦飯",
        subtitle: "午餐",
        description: "特色餐點。",
        stay: 60,
        location: "Kouri",
        image:
          "https://lh3.googleusercontent.com/p/AF1QipMx0foyzhCtEgn7ptYls9XHZusGsvjbECvw5DZI=w408-h408-k-no",
        notes:
          "特色料理。蝦蝦飯是招牌，尖峰可能排隊。",
        extra: "",
      },
      {
        id: "d4-5",
        time: "14:11",
        title: "沖繩美麗海水族館",
        subtitle: "海洋主題",
        description: "沖繩代表景點。",
        stay: 120,
        location: "Motobu",
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepLfXwwi9ALkXVCXAtrSHgCUIChEyrFCkHINsmfwJG22AOVDt9VvDtjRF7I5kjEqcpflqBjYHGS8EHPA1xSwgjF0Yn5CxMQQeN6ChUpwZQSes2ZZV_zS_BwheXUtoI0uXgaerEtronS8ejm=w408-h306-k-no",
        notes:
          "鯨鯊展。大型水槽看點多，園區大需走路，預留時間。",
        extra: "",
      },
      {
        id: "d4-6",
        time: "16:43",
        title: "漫畫倉庫 名護店",
        subtitle: "逛街",
        description: "二手商品與遊戲。",
        stay: 60,
        location: "Nago",
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoW86rumAR0b6eD99BX2vVxDNth3pEf94PnBsvCSisSGKUwA36360tpliMLjwh52uDeOSzzjPtvgsrghlSViQEojDge8MeNO6NlnPbyDMVCb-JaN9m9k61emR18LgbfLoasxMGGxinbV4v9=w408-h544-k-no",
        notes:
          "二手商店。可挖寶公仔、遊戲與家電。",
        extra: "",
      },
      {
        id: "d4-7",
        time: "18:30",
        title: "燒肉本部牧場 名護店",
        subtitle: "晚餐",
        description: "燒肉晚餐。",
        stay: 120,
        location: "Nago",
        image:
          "https://lh3.googleusercontent.com/p/AF1QipN6vGjlQz6vOftBRViZubNsMw8gtodxFykqPIl3=w408-h408-k-no",
        notes:
          "燒肉。在地牛肉為主，建議預約或避開尖峰。",
        extra: "",
      },
      {
        id: "d4-8",
        time: "20:41",
        title: "MEGA 唐吉訶德 名護店",
        subtitle: "採買",
        description: "補給與購物。",
        stay: 60,
        location: "Nago",
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqHeoVPwD1NyU3IWaD_WiNRiVKfY-OtmG9Yt4TzbyqY2GrIJ607TnR3Evt6PBOhoftxMVA8LKLP8mn6a0E1QltiWOvAPYMS4j6hsOmgnNIiGc9AzymZ59cc0HbUSQ6a9aXhEM2OAET7BJQ1=w426-h240-k-no",
        notes:
          "補給。24 小時購物，價格齊全，適合晚間補貨。",
        extra: "",
      },
      {
        id: "d4-9",
        time: "21:52",
        title: "名護櫻之家飯店",
        subtitle: "休息",
        description: "回飯店休息。",
        stay: 60,
        location: "Nago",
        image:
          "https://lh3.googleusercontent.com/p/AF1QipNjMIJFVtsggQXTvHFp5Y_FqhCxA1U3UbNyZbRJ=w408-h306-k-no",
        notes:
          "回飯店。整理戰利品，補充體力。",
        extra: "",
      },
    ],
  },
  {
    date: "2026/03/01",
    title: "第5天",
    stops: [
      {
        id: "d5-1",
        time: "08:30",
        title: "名護櫻之家飯店",
        subtitle: "出發",
        description: "整理行李後出發。",
        stay: 30,
        location: "Nago",
        image:
          "https://lh3.googleusercontent.com/p/AF1QipNjMIJFVtsggQXTvHFp5Y_FqhCxA1U3UbNyZbRJ=w408-h306-k-no",
        notes:
          "整理行李。北部最後一晚，確認遺漏物。",
        extra: "",
      },
      {
        id: "d5-2",
        time: "09:07",
        title: "許田休息站",
        subtitle: "休息補給",
        description: "休息、上洗手間。",
        stay: 60,
        location: "Kyoda",
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerq51I_1rqIk9S6IgznPhUM2GR2Tys8yad-3qYiPkwx8X6MYsEAhS-_Zhe34sqTLaPo4rbUuu9ZopYsxDtbNF_ObVR4FV-z0QTJkr6Ep5PsXJ7XGXxD0qvVTqvxMLgo9wvPGIfBzSj4Fvw=w408-h544-k-no",
        notes:
          "休息站補給。伴手禮區集中，順便休息與補水。",
        extra: "",
      },
      {
        id: "d5-3",
        time: "10:53",
        title: "Sports Depo 具志川店",
        subtitle: "購物",
        description: "運動用品採買。",
        stay: 90,
        location: "Urasoe",
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerkfUwX4NeR94JCP6IQOl8lF2MyuNNP1x91_TsV6qHB4wtBaQj1ldex4oOzKWHy52f5SkNrYlQOpwT8ey7KWJYM_EkvC10dTKhji5IR6n3l6F94K9S8U5b9-y0xY6bbmX_5DPU9HjiwsFdO=w408-h306-k-no",
        notes:
          "運動用品。品牌多，可補防曬、拖鞋或泳裝。",
        extra: "",
      },
      {
        id: "d5-4",
        time: "12:32",
        title: "Payao Restaurant",
        subtitle: "午餐",
        description: "海鮮餐廳。",
        stay: 60,
        location: "Naha",
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoMuhW1LMipEJPrmvlAcZDZP0v9BWVUix7jW9fxtNqNQudONUI-tVIP2whg83iDT1bgM11GvG238xW0Pj6jrilK3AldL69b1vdnpRadsZ-M80NrNJbDXIE_lWa70tglQbCbwhfCJw=w408-h306-k-no",
        notes:
          "海鮮餐廳。在地食材，適合午餐放鬆。",
        extra: "",
      },
      {
        id: "d5-5",
        time: "14:02",
        title: "港川外人住宅",
        subtitle: "散步",
        description: "特色小店與街景。",
        stay: 60,
        location: "Urasoe",
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepzs31VjqItStad3500BrlJfhcwr8jbMFEqyf5QIVOBDBQcHI_d-ywc5GrrobmS1h45GroatOWDFiUmwaxEFQ985zEIvJDr89-5CLCRW7ZAx5rF5Ob_urJS8ldecz2_7css7gFg=w408-h306-k-no",
        notes:
          "特色街區。文青小店與咖啡多，慢走拍照。",
        extra: "",
      },
      {
        id: "d5-6",
        time: "15:08",
        title: "漫畫倉庫 浦添店",
        subtitle: "逛街",
        description: "二手商店。",
        stay: 60,
        location: "Urasoe",
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqH7zVZfy1IGh4cQmWO-4-dWEfH30nB-o40wo9lP0SJ0MzdsrUhwIYMo8_SKiMSxy98A5xooBNlIXKZysYSrSy0TPapoUOXh2UfGEfRrxnzqi7NjyfWPF4yR8lhsfZ1mwk8FcC-wMuiBEjt=w426-h240-k-no",
        notes:
          "二手商店。玩具電玩區豐富，適合挖寶。",
        extra: "",
      },
      {
        id: "d5-7",
        time: "16:28",
        title: "首里城",
        subtitle: "文化景點",
        description: "沖繩歷史地標。",
        stay: 90,
        location: "Naha",
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepi6b9o34EdjQmQVL5qdCwzNGjBAMUDetUsh1pOduFF2-GNT5uC6HtC-W6QmesLIcPn6OljqFyznfoLWIvdHKOXd4UG8Ii5LW0r8Am_Jua_BBuExF1D4-sgIGHfv02vkvmAo0AUsRIgwZik=w408-h306-k-no",
        notes:
          "歷史文化。沖繩王國遺跡，園區步行多，建議穿好走鞋。",
        extra: "",
      },
      {
        id: "d5-8",
        time: "18:10",
        title: "ORIX Rent-a-car T Galleria",
        subtitle: "還車",
        description: "歸還租車。",
        stay: 30,
        location: "Omoromachi",
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqP5X7DGGe2UJ0fsWP6EkHe_YzNDiaeyQRzQw9FpJl7hAB9a1x38tmCOtJ5mCM37rROsqEyJhdBCPN9XgUsePdaV5sesyy4w-DvqJjIvhu33i90R-jGqUIwmNJYKF2drLJYkxifGg=w408-h306-k-no",
        notes:
          "歸還租車。確認油量與收據，檢查遺留物品。",
        extra: "",
      },
      {
        id: "d5-9",
        time: "18:48",
        title: "那霸休伊特渡假飯店",
        subtitle: "入住",
        description: "回到市區飯店。",
        stay: 60,
        location: "Naha",
        image:
          "https://lh3.googleusercontent.com/p/AF1QipMMBNHuDe2KS-rcWLqE22rtQEsdarvzIZVN47yo=w408-h272-k-no",
        notes:
          "入住休息。市區方便，準備晚餐行程。",
        extra: "",
      },
      {
        id: "d5-10",
        time: "19:30",
        title: "あぐー豚しゃぶしゃぶ専門店 オーシャンBoo！国際通り店",
        subtitle: "晚餐",
        description: "在地品牌涮涮鍋。",
        stay: 60,
        location: "Kokusai Dori",
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqWuHArgYUojlyCWrthc6QnL0JyMvi6PpaZuIxgEzTAtHI-16lP88TXwZt6dAoZfWrcg9loMlc1QYfZvrxFIGRLuRLrvo3t7PK8Mwfv6A40EamckFiPvWs2CLDqgkDjE913BUhsRz4xS-XA=w408-h544-k-no",
        notes:
          "阿古豬涮涮鍋。在地品牌，建議先訂位。",
        extra: "",
      },
      {
        id: "d5-11",
        time: "20:37",
        title: "那霸國際通商店街東口",
        subtitle: "逛街",
        description: "夜間散步。",
        stay: 0,
        location: "Naha",
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqWuHArgYUojlyCWrthc6QnL0JyMvi6PpaZuIxgEzTAtHI-16lP88TXwZt6dAoZfWrcg9loMlc1QYfZvrxFIGRLuRLrvo3t7PK8Mwfv6A40EamckFiPvWs2CLDqgkDjE913BUhsRz4xS-XA=w408-h544-k-no",
        notes:
          "逛街散步。夜間人潮多，燈光熱鬧。",
        extra: "",
      },
      {
        id: "d5-12",
        time: "20:40",
        title: "國際通屋台村",
        subtitle: "夜市",
        description: "小吃聚集地。",
        stay: 60,
        location: "Naha",
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AHVAweonKK8Hz4RGGXdxKsGKMv2ygouQqlmzKQFkDiFKwS6jjmT2rqrhbKBbvUR8fzwOMwhuI2Yu4QG3alyytxPs2u-DM97ouSQ1ofZxafFeddvNAf6ypCR0NfzEItrDsTXmyHrdCzHFNA=w408-h544-k-no",
        notes:
          "小吃。屋台氛圍，適合少量多吃。",
        extra: "",
      },
      {
        id: "d5-13",
        time: "21:44",
        title: "MaxValu 牧志店",
        subtitle: "補給",
        description: "補貨與飲料。",
        stay: 60,
        location: "Makishi",
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepli8PEwpzi7VFPiGayzhlLUo1FfcV14Xi3Y8GjofAmrNjuXemW-T_NhiwX6RSO-FAjFkeAM7pD1o-_yE07wGd-PEFuqfsHIZuEE3B8VZ9ul5PeFi1pPEZwJWRdb0_OhQYMpVGHRLi-zIpX=w408-h272-k-no",
        notes:
          "採買。晚間補貨，順便買隔日早餐。",
        extra: "",
      },
      {
        id: "d5-14",
        time: "22:50",
        title: "榮町琉貿",
        subtitle: "散步",
        description: "夜間街區。",
        stay: 60,
        location: "Sakaemachi",
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepzpsp1A3YFxbdxFxseGTJJo26GTjiRZ2Zdd_pKrASDmOQrwnja01D72Lqah_yJYlj0iCvcbWOFzLu6HoqHltrXB6gZM2nKvi6PBz5NTbbwnEfmoWatP_ZmuFjE-bhLPTgdGD7uapuwmjY7=w408-h725-k-no",
        notes:
          "夜間街區。小酒館聚集，氛圍好。",
        extra: "",
      },
    ],
  },
  {
    date: "2026/03/02",
    title: "第6天",
    stops: [
      {
        id: "d6-1",
        time: "10:00",
        title: "那霸休伊特渡假飯店",
        subtitle: "出發",
        description: "退房，寄放行李。",
        stay: 0,
        location: "Naha",
        image:
          "https://lh3.googleusercontent.com/p/AF1QipMMBNHuDe2KS-rcWLqE22rtQEsdarvzIZVN47yo=w408-h272-k-no",
        notes:
          "整理行李。退房前確認寄放行李與交通時間。",
        extra: "",
      },
      {
        id: "d6-2",
        time: "10:08",
        title: "那霸國際通商店街",
        subtitle: "最後採買",
        description: "最後採購伴手禮。",
        stay: 120,
        location: "Naha",
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqMxKUdXFR6hda6cvs-czwDfAaJIB0QkttNpJO5vAdpLqhQr_XdJnZhaup6v2bbnAk7tSzbtxf5ba5RbZXoNWvi9wBmlFeW2whGesECKi4WY-Df-DYiRw6jF_NCtzJjguoS0b6lmU8yfwsv=w426-h240-k-no",
        notes:
          "伴手禮。最後掃貨，注意折扣與退稅。",
        extra: "",
      },
      {
        id: "d6-3",
        time: "12:14",
        title: "那霸市第一牧志公設市場",
        subtitle: "市場",
        description: "午餐與海鮮。",
        stay: 75,
        location: "Makishi",
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AHVAweohbMEb1wsj6Xu2--6-rOuXsCIRRh8_PcVkXGV3Ijxli7oJ9fYZ6yckdMWqjgHUIWmEzZoX5aqud_QvVe9qEGoT_TCSSwT3XGtqzSad8bBJ7V5kFRQFgUF4QynZxSCGvY6qjZUX0eOttyg=w408-h306-k-no",
        notes:
          "吃午餐。可現點海鮮代煮，注意營業時間。",
        extra: "",
      },
      {
        id: "d6-4",
        time: "13:30",
        title: "福助玉子燒市場大街店",
        subtitle: "小吃",
        description: "買玉子燒當點心。",
        stay: 15,
        location: "Makishi",
        image:
          "https://lh3.googleusercontent.com/p/AF1QipNr-GRe9FjJCM_znCWLkFlQu5GwdCcs6CH9Uhq8=w408-h306-k-no",
        notes:
          "玉子燒。現做外帶方便。",
        extra: "",
      },
      {
        id: "d6-5",
        time: "13:52",
        title: "Surugaya Naha Okiei-dori",
        subtitle: "採買",
        description: "模型周邊店。",
        stay: 60,
        location: "Naha",
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerXxyEKJtXQ3544MWz7fV-QNmk0wd8ND3Ts6tFtkUF2wVuc3rm_xg-9-j01V_UxdKYQeOZ5A2LPU43int9VbWaR9LVgb4aT7lehEoGMwulJBRE1ewhdK0cunspMAgBM_sx-ijR5=w408-h272-k-no",
        notes:
          "模型周邊。動漫商品集中，可買限定品。",
        extra: "",
      },
      {
        id: "d6-6",
        time: "14:58",
        title: "那霸休伊特渡假飯店",
        subtitle: "回飯店",
        description: "取行李準備前往機場。",
        stay: 15,
        location: "Naha",
        image:
          "https://lh3.googleusercontent.com/p/AF1QipMMBNHuDe2KS-rcWLqE22rtQEsdarvzIZVN47yo=w408-h272-k-no",
        notes:
          "取行李。回飯店集合後前往機場。",
        extra: "",
      },
      {
        id: "d6-7",
        time: "15:45",
        title: "那霸機場",
        subtitle: "回程",
        description: "辦理登機手續。",
        stay: 0,
        location: "Naha Airport",
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep19nXgPREJyKwAkj_FSkfkHl8iziH4fP5io6yRHCeZcCwQzwX5efrM7gwmyLGivfEX0wlINbdABpa-pGf3at7vsQ-6Y4oZGXaSsQ5oOhFJIL1OMa5CnCO79vZItyDBifTeSVED5w=w408-h306-k-no",
        notes:
          "辦理登機。預留退稅與安檢時間。",
        extra: "",
      },
      {
        id: "d6-8",
        time: "15:49",
        title: "珀塔瑪 那霸機場國內線到達大廳店",
        subtitle: "小吃",
        description: "最後補給。",
        stay: 15,
        location: "Naha Airport",
        image:
          "https://lh3.googleusercontent.com/gps-cs-s/AHVAwergjMMcca2Vuhm55WJkik7rQP9ofVDNJrLKjCqdEuEpX_rGVSMGLX7_82Cfw36y8I38_SFVjzeFaDC9tw1e8vbl2vTiB6Ao1Fl44VPvkWBpnFoJcxqH2UUI_oybiqPq8JTJBR4NDu163f-t=w408-h306-k-no",
        notes:
          "最後補給。機場人氣甜點與伴手禮。",
        extra: "",
      },
    ],
  },
];
const packingChecklist = [
  {
    title: "證件與文件",
    items: [
      { label: "護照", carryOn: true },
      { label: "駕照 / 日文譯本 ", carryOn: true },
      { label: "機票 / 訂房資訊", carryOn: true },
      { label: "保險資訊", carryOn: true },
    ],
  },
  {
    title: "電子用品",
    items: [
      { label: "手機", carryOn: true },
      { label: "充電器 / 充電線", carryOn: true },
      { label: "行動電源", carryOn: true },
      { label: "esim / 卡針", carryOn: true },
    ],
  },
  {
    title: "衣物",
    items: [
      { label: "外套 / 薄長袖", carryOn: false },
      { label: "鞋", carryOn: false },
      { label: "襪子 / 衣服", carryOn: false },
      { label: "摺疊傘", carryOn: true },
    ],
  },
  {
    title: "盥洗用品與藥品",
    items: [
      { label: "牙刷 / 牙膏", carryOn: false },
      { label: "保養品 / 防曬", carryOn: false },
      { label: "常備藥", carryOn: true },
      { label: "面紙 / 濕紙巾", carryOn: true },
    ],
  },
  {
    title: "自駕相關",
    items: [
      { label: "手機車架", carryOn: false },
    ],
  },
  {
    title: "其他",
    items: [
      { label: "手機", carryOn: true },
      { label: "錢包", carryOn: true },
      { label: "鑰匙", carryOn: true },
    ],
  },
];

function renderTimeline() {
  if (!timeline) {
    return;
  }
  timeline.innerHTML = "";
  const activeDay = getActiveDay();
  if (!activeDay) {
    return;
  }
  const section = document.createElement("section");
  section.className = "timeline-day";
  section.innerHTML = `<h3>${activeDay.title} · ${activeDay.date}</h3>`;
  activeDay.stops.forEach((stop) => {
    const card = document.createElement("article");
    card.className = "timeline-card";
    const mapSection = buildMapSection(stop);
    card.innerHTML = `
      <span>${stop.time}</span>
      <strong>${stop.title}</strong>
      <p>${stop.subtitle}</p>
      <p>${stop.description}</p>
      <img class="timeline-image" src="${stop.image}" alt="${stop.title}" />
      <div class="timeline-meta">
        <span>停留: ${formatStay(stop.stay)}</span>
        <strong>${stop.location}</strong>
      </div>
      <p>${stop.notes}</p>
      ${mapSection}
    `;
    section.appendChild(card);
  });
  timeline.appendChild(section);
}

function populateSelect() {
  if (!daySelect) {
    return;
  }
  daySelect.innerHTML = "";
  tripDays.forEach((day) => {
    const option = document.createElement("option");
    option.value = day.date;
    option.textContent = `${day.title} · ${day.date}`;
    daySelect.appendChild(option);
  });
  daySelect.value = tripDays[0].date;
  renderTimeline();
}

function getActiveDay() {
  const value = daySelect?.value || tripDays[0].date;
  return tripDays.find((day) => day.date === value) || tripDays[0];
}

function formatStay(minutes) {
  const mins = Number(minutes) || 0;
  const hours = Math.floor(mins / 60);
  const rem = mins % 60;
  const h = `${hours}`.padStart(2, "0");
  const m = `${rem}`.padStart(2, "0");
  return `${h}時${m}分`;
}

function renderPackingList() {
  const container = document.getElementById("packing-list");
  if (!container) {
    return;
  }
  container.innerHTML = "";
  packingChecklist.forEach((group) => {
    const section = document.createElement("div");
    section.className = "packing-group";
    const items = group.items
      .map(
        (item) => `
          <label class="packing-item">
            <input type="checkbox" />
            <span>${item.label}</span>
            ${item.carryOn ? '<span class="carry-on">隨身</span>' : ""}
          </label>
        `
      )
      .join("");
    section.innerHTML = `<h3>${group.title}</h3><div class="packing-items">${items}</div>`;
    container.appendChild(section);
  });
}

function buildMapSection(stop) {
  const query = stop.mapQuery || stop.title;
  const baseLink = {
    label: "Google Maps",
    url: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      query
    )}`,
  };
  const links = [baseLink, ...(stop.mapLinks || [])];
  const linkHtml = links
    .map(
      (item) =>
        `<a class="map-link" href="${item.url}" target="_blank" rel="noreferrer">${item.label}</a>`
    )
    .join("");

  const embeds = stop.mapEmbeds || [];
  const embedHtml = embeds.length
    ? `<div class="map-embeds">${embeds
        .map((src) => `<iframe class="map-embed" src="${src}" loading="lazy"></iframe>`)
        .join("")}</div>`
    : "";

  return `<div class="map-links">${linkHtml}</div>${embedHtml}`;
}

if (daySelect) {
  daySelect.addEventListener("change", renderTimeline);
}

renderTimeline();
populateSelect();
renderPackingList();
