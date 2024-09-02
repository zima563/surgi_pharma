const { catchError } = require("../../middlewares/catchError.js");
const apiError = require("../../utils/apiError.js");
const SequelizeFeatures = require("../../utils/apiFeatures.js");

exports.deleteOne = (model) => {
  return catchError(async (req, res, next) => {
    const deletedDocumentCount = await model.destroy({
      where: { id: req.params.id },
    });

    if (deletedDocumentCount === 0) {
      return next(new apiError("document not found", 404));
    }

    res.json({ msg: "document deleted successfully" });
  });
};

exports.updateOne = (model) => {
  return catchError(async (req, res, next) => {
    if (req.file)
      req.body.image = `http://api.surgi-pharma.com/${req.file.filename}`;
    if (req.files?.imgCover)
      req.body.imgCover = `https://api.surgi-pharma.com/${req.files.imgCover[0].filename}`;
    if (req.files?.images)
      req.body.images = req.files.images.map(
        (val) => `https://api.surgi-pharma.com/${val.filename}`
      );
    const document = await model.update(req.body, {
      where: { id: req.params.id },
    });

    if (!document) {
      return next(new apiError("document not found", 404));
    }

    res.json({ msg: "success" });
  });
};

exports.addOne = (model) => {
  return catchError(async (req, res, next) => {
    if (req.params.category) req.body.category = req.params.category;
    if (req.file)
      req.body.image = `https://api.surgi-pharma.com/${req.file.filename}`;

    if (req.files?.imgCover)
      req.body.imgCover = `https://api.surgi-pharma.com/${req.files.imgCover[0].filename}`;
    if (req.files?.images)
      req.body.images = req.files.images.map(
        (val) => `https://api.surgi-pharma.com/${val.filename}`
      );

    let document = new model(req.body);
    await document.save();
    res.json({ msg: "success", document });
  });
};

exports.getAll = (model, modelName) => {
  return catchError(async (req, res, next) => {
    let sequelizeFeatures = new SequelizeFeatures(model, req.query)
      .paginate(countDocuments) // Paginate based on the total count and request query
      .filter() // Apply filtering criteria
      .sort() // Apply sorting criteria
      .search(modelName) // Apply search criteria
      .limitedFields(); // Select specific fields to return

    const { sequelizeQuery } = sequelizeFeatures;

    // Count the number of documents that match the modified query
    const countDocuments = await model.count({ where: sequelizeQuery.where });

    // Paginate based on the filtered document count
    sequelizeFeatures.paginate(countDocuments);

    let documents = await model.findAll(sequelizeQuery);

    res.json({
      msg: "success",
      paginationResult: sequelizeFeatures.paginationResult,
      countDocuments,
      documents,
    });
  });
};

exports.getOne = (model) => {
  return catchError(async (req, res, next) => {
    let document = await model.findByPk(req.params.id);
    !document && next(new apiError("not document found", 404));
    document && res.json({ msg: "success", document });
  });
};
