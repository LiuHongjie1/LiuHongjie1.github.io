const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "分礼进行曲",
        artist: 'RAiNBOW计划 / 林姝涵',
        url: 'http://music.163.com/song/media/outer/url?id=465920705.mp3',
        cover: '/images/1.jpg',
      },
      {
        name: "词不达意",
        artist: '林忆莲',
        url: 'http://lc-nt7isJt6.cn-n1.lcfile.com/YcSNAY1s6QRGxnfzjFWyJzm4M5SpW5Ek/%E8%AF%8D%E4%B8%8D%E8%BE%BE%E6%84%8F-%E6%9E%97%E5%BF%86%E8%8E%B2.flac',
        cover: '/images/2.jpg',
      },
      {
        name: "喜帖街",
        artist: '谢安琪',
        url: 'http://lc-nt7isJt6.cn-n1.lcfile.com/kdYBqhXKIbdlA6893u28O5qm3zCaURn3/%E5%96%9C%E5%B8%96%E8%A1%97.flac',
        cover: '/images/3.jpg',
      },
      {
        name: "逆光",
        artist: '孙燕姿',
        url: 'http://lc-nt7isJt6.cn-n1.lcfile.com/vG6jhLMaEHabHTxcwjSnQWI0jKhoVdrY/%E9%80%86%E5%85%89.flac',
        cover: '/images/4.jpg',
      },
      {
        name: "你瞒我瞒",
        artist: '陈柏宇',
        url: 'http://lc-nt7isJt6.cn-n1.lcfile.com/xPNGLMvBL5ptHa19d7Jot07e47wAj65R/%E4%BD%A0%E7%9E%92%E6%88%91%E7%9E%92-%E9%99%88%E6%9F%8F%E5%AE%87.flac',
        cover: '/images/5.jpg',
      },
      {
        name: "我记得",
        artist: '赵雷',
        url: 'http://lc-nt7isJt6.cn-n1.lcfile.com/b6QyBPIFA8n1qssxeTzW07hnxpzDjlKg/%E6%88%91%E8%AE%B0%E5%BE%97.mp3',
        cover: '/images/6.jpg',
      },
      {
        name: "迟迟",
        artist: '薛之谦',
        url: 'http://lc-nt7isJt6.cn-n1.lcfile.com/CiJqTFojQuUOjyN3zrRMAxFWzgDPzuSF/%E8%BF%9F%E8%BF%9F-%E8%96%9B%E4%B9%8B%E8%B0%A6.flac',
        cover: '/images/7.jpg',
      },
      {
        name: "想着你",
        artist: '郭顶',
        url: 'http://lc-nt7isJt6.cn-n1.lcfile.com/FSFBnjXwIKsWTnXRdEfHnG81H1adHgcE/%E6%83%B3%E7%9D%80%E4%BD%A0-%E9%83%AD%E9%A1%B6.flac',
        cover: '/images/8.jpg',
      },
      {
        name: "我们俩",
        artist: '郭顶',
        url: 'http://lc-nt7isJt6.cn-n1.lcfile.com/9cKlWwXhu63VknK7Ij2FrKUFuSNjxosR/%E6%88%91%E4%BB%AC%E4%BF%A9.flac',
        cover: '/images/9.jpg',
      },
      {
        name: "在云端",
        artist: '郭顶',
        url: 'http://lc-nt7isJt6.cn-n1.lcfile.com/TBFKpztkldKxcdjc3nuy6zSEj8Ik7JWX/%E5%9C%A8%E4%BA%91%E7%AB%AF-%E9%83%AD%E9%A1%B6.flac',
        cover: '/images/8.jpg',
      },
      {
        name: "爱得太迟",
        artist: '古巨基',
        url: 'http://lc-nt7isJt6.cn-n1.lcfile.com/bVwOEovWQQqzUObwXolttoDBcx4PAYfb/%E7%88%B1%E5%BE%97%E5%A4%AA%E8%BF%9F-%E5%8F%A4%E5%B7%A8%E5%9F%BA.flac',
        cover: '/images/10.jpg',
      },
      {
        name: "必杀技",
        artist: '古巨基',
        url: 'http://lc-nt7isJt6.cn-n1.lcfile.com/RuLu81WUa3xcyT5hlWSxwtbghgJqX7ro/%E5%BF%85%E6%9D%80%E6%8A%80-%E5%8F%A4%E5%B7%A8%E5%9F%BA.flac',
        cover: '/images/11.jpg',
      },
      {
        name: "山丘",
        artist: '李宗盛',
        url: 'http://lc-nt7isJt6.cn-n1.lcfile.com/WHmmsaRaD1uA9W36EspYvf3250jiFuoj/%E5%B1%B1%E4%B8%98.mp3',
        cover: '/images/12.jpg',
      },
      {
        name: "新写的旧歌",
        artist: '李宗盛',
        url: 'http://lc-nt7isJt6.cn-n1.lcfile.com/bObAIhhpJWLRH8F1gLPVpi0X3zEwFe2d/%E6%96%B0%E5%86%99%E7%9A%84%E6%97%A7%E6%AD%8C.mp3',
        cover: '/images/13.jpg',
      },
      {
        name: "给自己的歌",
        artist: '李宗盛',
        url: 'http://lc-nt7isJt6.cn-n1.lcfile.com/uus49NX3luYwcgkCMJNtlJnjnA7juCAw/%E7%BB%99%E8%87%AA%E5%B7%B1%E7%9A%84%E6%AD%8C.mp3',
        cover: '/images/14.jpg',
      },
    ]
});