const jwt = require('jsonwebtoken'),
  secret = require('../config/env.config')['jwt_secret'];

const ADMIN_PERMISSION = 4096;

exports.minimumPermissionLevelRequired = required_permission_level => {
  return (req, res, next) => {
    let user_permission_level = parseInt(req.jwt.permission_level);
    let user_id = req.jwt.user_id;
    if (user_permission_level & required_permission_level) {
      return next();
    } else {
      return res.status(403).send();
    }
  };
};
