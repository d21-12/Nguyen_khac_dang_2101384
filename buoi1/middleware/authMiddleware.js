// Kiểm tra xem người dùng đã đăng nhập hay chưa
const isAuthenticated = (req, res, next) => {
    if (req.session.user) {
      next();  // Nếu có session user, cho phép tiếp tục
    } else {
      res.redirect('/login');  // Chưa đăng nhập, điều hướng về trang login
    }
  };
  
  // Chỉ cho phép admin truy cập
  const isAdmin = (req, res, next) => {
    if (req.session.user && req.session.user.role === 'admin') {
      next();  // Nếu role của user là admin, tiếp tục
    } else {
      res.status(403).send("Access denied. Admins only.");  // Không phải admin, từ chối truy cập
    }
  };
  
  // Chỉ cho phép người dùng xem thông tin cá nhân của chính họ
  const isUser = (req, res, next) => {
    if (req.session.user && req.session.user.id === parseInt(req.params.id)) {
      next();  // Nếu user đúng là người đang yêu cầu, tiếp tục
    } else {
      res.status(403).send("Access denied. This is not your account.");  // Từ chối truy cập
    }
  };
  
  export { isAuthenticated, isAdmin, isUser };
  