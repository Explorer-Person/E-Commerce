const { arrayToJSON } = require("@root/src/utils");
const { ProductQueries } = require("@src/queries");

exports.getProducts = (req, res, next) => {
  const products = new ProductQueries();
  products
    .getProducts()
    .then((result) => {
      const products = arrayToJSON(result);
      res.status(200).json({products:products});
    })
    .catch((err) => console.log(err));
};

exports.filterProducts = (req, res, next) =>{
  const filterDatas = req.body.filterDatas;

  const products = new ProductQueries();
  products.filterProducts(filterDatas)
  .then(result=>{
    const products = arrayToJSON(result);
    res.status(200).json({products:products});
  })
  .catch((err)=> console.log(err));
}


