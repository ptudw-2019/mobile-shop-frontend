exports.home = (req, res, next) => {
    const data = [{
        date: '20/04/2019',
        total: '16,990,000',
        status: 'Đặt hàng thành công',
    }, {
        date: '10/04/2019',
        total: '4,210,000',
        status: 'Đã giao hàng',
    }, {
        date: '10/04/2019',
        total: '560,000',
        status: 'Đang giao hàng',
    }];
    data.forEach((element, index) => {
        element.id = (index + 1).toString();
    });
    res.render('order/history', { title: 'Đơn hàng của bạn', data })
};