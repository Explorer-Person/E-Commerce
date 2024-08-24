const { productModals } = require("@src/models");
const { executeQuery } = require("@src/db");

class ProductQueries {
  async getProducts() {
    try {
      const query = `SELECT * FROM products`;
      await productModals.productModal();
      const products = await executeQuery(query);

      return products;
    } catch (err) {
      throw err;
    }
  }

  async getProduct(productId) {
    try {
      const query = `SELECT * FROM products WHERE id = ?`;
      await productModals.productModal();
      const products = await executeQuery(query, productId);

      return products;
    } catch (err) {
      throw err;
    }
  }

  async filterProducts(filterDatas) {
    try {
      const { categories, discountStatus, rangedPrice, searchText, weight } =
       await filterDatas;

      let conditions = [];

      if (categories.length > 0) {
        const categoryString = await categories
        .map((category) => `'${category}'`)
        .join(",");
        conditions.push(`category IN (${categoryString})`);
      }

      if (discountStatus) {
        conditions.push(`discounted = '${discountStatus}'`);
      }

      if (weight !== "") {
        conditions.push(`weight = '${weight}'`);
      }

      if (searchText) {
        conditions.push(
          `(title LIKE '%${searchText}%' OR detail LIKE '%${searchText}%')`
        );
      }

      if (rangedPrice.min !== 0 && rangedPrice.max !== 0) {
        conditions.push(
          `price >= ${rangedPrice.min} AND price <= ${rangedPrice.max}`
        );
      }
      const whereClause =
        conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : '';
      const query = `SELECT * FROM products ${whereClause}`;
      const products = await executeQuery(query);
      console.log(products);
      return products;
    } catch (err) {
      throw err;
    }
  }

 
}

module.exports = ProductQueries;
