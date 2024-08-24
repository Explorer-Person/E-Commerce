const arrayToJSON = (array) => {
  const configuredArray = array.map((element) => {
    const product = {
      id: element.id,
      image: element.image,
      title: element.title,
      price: element.price,
      detail: element.detail,
      rate: element.rate,
    };
    return product;
  });
  return configuredArray;
};

module.exports = { arrayToJSON };
