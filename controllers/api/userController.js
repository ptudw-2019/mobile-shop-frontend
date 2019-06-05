const User = require('../../models/user');

exports.check = async (req, res, next) => {
  const userExist = await User.check(req.query.email);
  res.json(userExist);
};