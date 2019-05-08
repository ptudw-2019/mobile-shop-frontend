function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

exports.home = (req, res, next) => {
    const price = [4990000, 26590000];
    const data = [{
        name: 'Xiaomi Redmi Note 7',
        price: formatPrice(price[0]),
        image: '/images/xiaomi.jpg',
        count: 1,
    }, {
        name: 'iPhone XS Max 64 GB',
        price: formatPrice(price[1]),
        image: 'images/iphoneXSMax.png',
        count: 2,
    }];
    let sum = 0;
    data.forEach((element, index) => {
        element.total = formatPrice(price[index] * element.count);
        sum += (price[index] * element.count);
    });
    res.render('checkout/index', { title: 'Thanh toán', data, sum: formatPrice(sum) })
};

exports.done = (req, res, next) => {
    res.render('checkout/done', { title: 'Đặt hàng thành công' })
}