const swiper = new Swiper(".banner-swiper", {
    direction: "vertical",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // autoplay: {
    //     delay: 1000,
    // },
});

const bannerItems = [
    {
        name: "Dragon Quest: Chuyến Phiêu Lưu Của Dai - Tập 56: Trái tim kế thừa",
        imgURL: "https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_thumbnails/slider_banner_smart_tv___desktop_revised-938239b649a2-1673939360412-1Pun0z1X.png?v=0&maxW=1400&format=webp",
    },
    {
        name: "",
        imgURL: "https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_assets/kv_1920x1080_slide-e521a5d9663b-1681206050218-TtPVgH7L.jpg?v=0&maxW=1400&format=webp",
    },
    {
        name: "Thám Tử Lừng Danh Conan: Câu Chuyện Về Haibara Ai ~ Chuyến Tàu Sắt Bí Ẩn Màu Đen ~",
        imgURL: "https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_assets/slider_banner_smart_tv___desktop-5c1406504eec-1680598959653-xtBEqkpn.png?v=0&maxW=1400&format=webp",
    },
    {
        name: "",
        imgURL: "https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_assets/1920x1080_slider-c7b89ee33560-1681288148193-wknxSVi5.jpg?v=0&maxW=1400&format=webp",
    },
    {
        name: "Dragon Quest: Chuyến Phiêu Lưu Của Dai",
        imgURL: "https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_topic/slider_banner_smart_tv___desktop-578969fcf053-1671079071111-nGaZVcQY.png?v=0&maxW=1400&format=webp",
    },
    {
        name: "",
        imgURL: "https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_assets/1080x1920_slider-95e69012fa1f-1680156142756-yWupF8Sk.jpg?v=0&maxW=1400&format=webp",
    },
    {
        name: "One Piece - Đảo Hải Tặc",
        imgURL: "https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_topic/_slider_banner_web___smart_tv-2dda7c57acdd-1667231078662-1HySVNTB.png?v=0&maxW=1400&format=webp",
    },
    {
        name: "Bad Luck",
        imgURL: "https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_topic/sliderbanner_desktop-db23771dd912-1672116139707-DXz4vmH4.jpg?v=0&maxW=1400&format=webp",
    },
    {
        name: "Black Clover",
        imgURL: "https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_topic/series_detail_desktop-f33a9fc3b2b3-1673597032900-Icu1L6ia.jpg?v=0&maxW=1400&format=webp",
    },
    {
        name: "ODDTAXI - Chuyến Taxi Bất Ổn",
        imgURL: "https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_topic/slider_banner_smart_tv___desktop__1_-2335f23ab78b-1675397339692-4tClxFzc.png?v=0&maxW=1400&format=webp",
    },
    {
        name: "Villain's Survival Diary - Nhật Kí Sống Sót Của Nữ Phụ Phản Diện",
        imgURL: "https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_topic/slider_banner_smart_tv___desktop-8470f2e3dafe-1671697970875-JsvK3c08.jpg?v=0&maxW=1400&format=webp",
    },
    {
        name: "Doraemon",
        imgURL: "https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_topic/doraemons9_02_sbsmarttv-e73982260c40-1609395345843-63UWkTZR.png?v=0&maxW=1400&format=webp",
    },
    {
        name: "Demon Slayer - Thanh Gươm Diệt Quỷ",
        imgURL: "https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_topic/slider_banner_web___tv-c1a5ad16091b-1643012414650-0Ck0bhmb.png?v=0&maxW=1400&format=webp",
    },
    {
        name: "Fruits Basket",
        imgURL: "https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_topic/slider_banner_smart_tv___desktop-8cfa3c355fff-1669892636710-lsWZHuq8.png?v=0&maxW=1400&format=webp",
    },
    {
        name: "Flower Of Dynasties - Cánh Hoa Trôi Giữa Hoàng Triều",
        imgURL: "https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_topic/slide_banner_smart_tv-dcd335924d2b-1647940282843-0QQYF7I9.png?v=0&maxW=1400&format=webp",
    },
    {
        name: "Lạc Trôi",
        imgURL: "https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_topic/sliderbanner_desktop-dd9c883e6922-1679396954694-y3gcwLQ6.jpg?v=0&maxW=1400&format=webp",
    },
    {
        name: "Thân Ái Chí Ái (Cá Mực Hầm Mật S2)",
        imgURL: "https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_topic/thanaichiai_02_sbsmarttv-ece36001ed59-1634238083936-OrCdxYwF.jpg?v=0&maxW=1400&format=webp",
    },
    {
        name: "Office Life - Kiếp Văn Phòng",
        imgURL: "https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_topic/sliderbanner_desktop-1eb6a3ef17f3-1670226529891-klietPky.jpg?v=0&maxW=1400&format=webp",
    },
    {
        name: "Độc Cô Thiên Hạ",
        imgURL: "https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_topic/doccothienha_02_sbsmarttv_resized-488da9a86033-1637387178532-PqvrrQfe.png?v=0&maxW=1400&format=webp",
    },
    {
        name: 'Cherry Magic: 30 Tuổi Vẫn Còn "Zin" Sẽ Biến Thành Phù Thủy',
        imgURL: "https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_topic/series_detail_desktop-19fcb4e05c3e-1662533664564-TVKcxluW.jpg?v=0&maxW=1400&format=webp",
    },
];
