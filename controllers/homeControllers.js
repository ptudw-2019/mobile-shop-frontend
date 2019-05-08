exports.home = (req, res, next) => {
    res.render('index', {
        title: 'Trang chủ',
        topBrand: [{
            image: '/images/apple.png',
            name: 'Apple',
            delay: 0,
        }, {
            image: '/images/samsung.png',
            name: 'Samsung',
            delay: 150,
        }, {
            image: '/images/xiaomi.jpg',
            name: 'Xiaomi',
            delay: 300,
        }],
        hotItems: [{
            name: 'iPhone XS Max 64 GB',
            image: '/images/iphoneXSMax.png',
            price: '23.490.000',
            uri: '/apple/1',
        }, {
            name: 'Samsung Galaxy S9',
            image: '/images/galaxyS9.png',
            price: '17.890.000',
            uri: '/samsung/2',
        }, {
            name: 'iPhone X 64 GB',
            image: '/images/apple.png',
            uri: '/apple/2',
            price: '21.000.000'
        }, {
            name: 'Oppo F11 Pro',
            image: '/images/oppof11pro.png',
            uri: '/oppo/3',
            price: '8.490.000'
        }, {
            name: 'Xiaomi Redmi Note 7',
            image: '/images/xiaomi.jpg',
            uri: '/xiaomi/1',
            price: '4.090.000'
        }],
    });
};

exports.loginGet = (req, res) => {
    res.render('authen/login', { title: 'Đăng nhập' })
};

exports.recoverGet = (req, res) => {
    res.render('authen/recover', { title: 'Quên mật khẩu' })
};

exports.registerGet = (req, res) => {
    res.render('authen/register', { title: 'Đăng ký' })
};