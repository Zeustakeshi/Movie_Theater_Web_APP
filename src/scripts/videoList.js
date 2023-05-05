const videoData = [
    {
        imgURL: "https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_topic/doraemons9_02_sbsmarttv-e73982260c40-1609395345843-63UWkTZR.png?v=0&maxW=1400&format=webp",
        to: "/",
        name: "Doaemon",
    },
    {
        imgURL: "https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_topic/doraemons9_02_sbsmarttv-e73982260c40-1609395345843-63UWkTZR.png?v=0&maxW=1400&format=webp",
        to: "/",
        name: "Doaemon2",
    },
    {
        imgURL: "https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_topic/doraemons9_02_sbsmarttv-e73982260c40-1609395345843-63UWkTZR.png?v=0&maxW=1400&format=webp",
        to: "/",
        name: "Doaemon3",
    },
];

var swiper = new Swiper(".video-list-wrapper", {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
        enabled: true,
    },
    // pagination: {
    //     el: ".video-list-pagination",
    //     clickable: true,
    // },
    navigation: {
        nextEl: ".swiper-button-prev",
        prevEl: ".swiper-button-prev",
    },
});

class VideoList {
    constructor() {
        this.root = "";
        this.data = videoData;
    }

    render() {
        return this.data.map((item) => {
            return ``;
        });
    }
    html() {
        return ``;
    }
}

class VideoItem {
    constructor() {}

    html() {
        return ``;
    }
}
