const { globalError } = require("./middlewares/globalError.js");
const categoryRouter = require("./modules/category/category.routes.js");
const DistrubuteRouter = require("./modules/distrubute/distrubute.routes.js");
const messageRouter = require("./modules/message/message.routes.js");
const ProductRouter = require("./modules/product/product.routes.js");
const apiError = require("./utils/apiError.js");


exports.bootstrap = (app) => {
  app.use("/api/categories",categoryRouter);
  app.use("/api/products",ProductRouter);
  app.use("/api/distrubute",DistrubuteRouter);
  app.use("/api/message",messageRouter);
  app.get("/", (req, res) => res.send("Hello World!"));
  app.use("*", (req, res, next) => {
    next(new apiError(`not found endPoint : ${req.originalUrl}`, 404));
  });

  app.use(globalError);
};
