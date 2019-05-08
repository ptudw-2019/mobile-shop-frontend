exports.editGet = (req, res, next) => {
    const data = {
        name: "Nguyễn Văn A",
        address: '227 Nguyễn Văn Cừ',
        ward: '4',
        district: '5',
        email: 'khoa400@gmail.com',
        phone: '0976713746',
    }
    res.render('account/edit', { title: 'Thông tin tài khoản', data })
};
