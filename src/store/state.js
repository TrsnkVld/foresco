let state = {
    isHeaderMenuOpened: false,
    isHeaderMenuContentShown: false,
    isMenuLinksShowed: false,
    isWelcomeScreenShowing: true,
    isModalShowed: false,
    isModalInnerShowed: false,
    isPageScrolled: false,

    casePreviewImageHeight: 674.2,

    cases: [
        {
            title: "Saldo. Долги",
            alias: 'saldo-debts',
            subtitle: "Удобный инструмент для ведения финансовых вопросов",
            color: "#0262ce",
            image: require("../assets/img/saldo_mockup.png"),
            logo: require("../assets/img/logo.png"),
            tags: {
                appstore: 'https://apps.apple.com/us/app/saldo-%D1%83%D1%87%D0%B5%D1%82-%D0%B4%D0%BE%D0%BB%D0%B3%D0%BE%D0%B2-%D0%B8-%D0%B7%D0%B0%D0%B9%D0%BC%D0%BE%D0%B2/id1501316505',
                googleplay: 'asdasd',
                simple: [
                    'development',
                    'design'
                ]
            }
        },
        {
            title: "Musealbum",
            alias: 'musealbum',
            subtitle: "Cервис для создания и печати фотоальбомов",
            color: "#c1a476",
            image: require("../assets/img/musealbum.png"),
            logo: require("../assets/img/musealbum_logo.png"),
            tags: {
                appstore: 'https://apps.apple.com/ru/app/%D1%84%D0%BE%D1%82%D0%BE%D0%B0%D0%BB%D1%8C%D0%B1%D0%BE%D0%BC-musealbum/id1447112453',
                googleplay: '',
                simple: [
                    'development',
                    'design'
                ]
            }
        },
        {
            title: "Sohobook",
            alias: 'sohobook',
            subtitle: "Приложение для создания и заказа фотокниг",
            color: "#0895be",
            image: require("../assets/img/soho.png"),
            logo: require("../assets/img/soho_logo.png"),
            tags: {
                appstore: 'https://apps.apple.com/ru/app/%D1%84%D0%BE%D1%82%D0%BE%D0%BA%D0%BD%D0%B8%D0%B3%D0%B0-sohobook/id1438128437',
                googleplay: '',
                simple: [
                    'development',
                    'design'
                ]
            }
        },
        {
            title: "Power Place",
            alias: 'power-place',
            subtitle: "Cервис для поиска заведений с Power Bank",
            color: "#737373",
            image: require("../assets/img/powerplace.png"),
            logo: require("../assets/img/powerplace_logo.png"),
            tags: {
                appstore: 'https://apps.apple.com/us/app/saldo-%D1%83%D1%87%D0%B5%D1%82-%D0%B4%D0%BE%D0%BB%D0%B3%D0%BE%D0%B2-%D0%B8-%D0%B7%D0%B0%D0%B9%D0%BC%D0%BE%D0%B2/id1501316505',
                googleplay: '',
                simple: [
                    'development',
                    'design'
                ]
            }
        },
        {
            title: "Find Photo",
            alias: 'find-photo',
            subtitle: "Сортировка и поиск фотографий по меткам",
            color: "#f04f6c",
            image: require("../assets/img/findphoto.png"),
            logo: require("../assets/img/findphoto_logo.png"),
            tags: {
                appstore: 'https://apps.apple.com/ru/app/find-photo/id1500003862',
                googleplay: '',
                simple: [
                    'development',
                    'design'
                ]
            }
        },
        {
            title: "Gusli",
            alias: 'gusli',
            subtitle: "Поиск и заказ музыки в заведениях",
            color: "#f04f6c",
            image: require("../assets/img/gusli.png"),
            logo: require("../assets/img/gusli_logo.png"),
            tags: {
                appstore: 'https://apps.apple.com/ru/app/gusli/id1090409008',
                googleplay: 'https://play.google.com/store/apps/details?id=ru.mobileup.gusliapp',
                simple: [
                    'development',
                    'design'
                ]
            }
        }
    ]
};

export default state;