let state = {
    isHeaderMenuOpened: false,
    isHeaderMenuContentShown: false,
    isMenuLinksShowed: false,
    isWelcomeScreenShowing: true,
    isModalShowed: false,
    isModalInnerShowed: false,

    casePreviewImageHeight: 674.2,

    cases: [
        {
            title: "Saldo. Долги",
            alias: 'saldo-debts',
            subtitle: "Удобный инструмент для ведения финансовых вопросов",
            color: "#0262ce",
            image: require("../assets/img/saldo_mockup.png"),
            logo: require("../assets/img/logo.png")
        },
        {
            title: "Musealbum",
            alias: 'musealbum',
            subtitle: "Cервис для создания и печати фотоальбомов",
            color: "#c1a476",
            image: require("../assets/img/musealbum.png"),
            logo: require("../assets/img/musealbum_logo.png")
        },
        {
            title: "Sohobook",
            alias: 'sohobook',
            subtitle: "Приложение для создания и заказа фотокниг",
            color: "#0895be",
            image: require("../assets/img/soho.png"),
            logo: require("../assets/img/soho_logo.png")
        },
        {
            title: "Power Place",
            alias: 'power-place',
            subtitle: "Cервис для поиска заведений с Power Bank",
            color: "#737373",
            image: require("../assets/img/powerplace.png"),
            logo: require("../assets/img/powerplace_logo.png")
        },
        {
            title: "Find Photo",
            alias: 'find-photo',
            subtitle: "Сортировка и поиск фотографий по меткам",
            color: "#f04f6c",
            image: require("../assets/img/findphoto.png"),
            logo: require("../assets/img/findphoto_logo.png")
        },
        {
            title: "Gusli",
            alias: 'gusli',
            subtitle: "Поиск и заказ музыки в заведениях",
            color: "#f04f6c",
            image: require("../assets/img/gusli.png"),
            logo: require("../assets/img/gusli_logo.png")
        }
    ]
};

export default state;