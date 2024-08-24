const { AddressQueries } = require("@root/src/queries");

exports.postAddress = async (req, res, next) => {
  const addressData = req.body.addressData;
  const userId = req.session.user.id;
  const addresses = new AddressQueries();
  await addresses
    .insertAddress(addressData, userId)
    .then((result) => {
      if (result) {
        res.status(201).json({
          status: 201,
          process: "add",
          message: result,
        });
      }
    })
    .catch((err) => {
      throw err;
    });
};

exports.getAddresses = async (req, res, next) => {
  const userId = req.session.user.id;

  const addresses = new AddressQueries();
  await addresses
    .getAddresses(userId)
    .then((result) => {
      const keysToExclude = ["userId", "created_at"];
      const sortedAddresses = JSON.stringify(
        result.map((address) => {
          const filteredAddress = { ...address };
          keysToExclude.forEach((key) => delete filteredAddress[key]);
          return filteredAddress;
        })
      );
      res.status(200).json({
        status: 200,
        process: "getAll",
        message: sortedAddresses,
      });
    })
    .catch((err) => console.log(err));
};

exports.getAddress = async (req, res, next) => {
  const parameter =
    req.params.addressId !== "selectedAddress" ? req.params.addressId : null;
  const addresses = new AddressQueries();
  await addresses
    .getAddress(parameter)
    .then((result) => {
      if (!result) {
        res.status(404).json({
          status: 404,
          process: "get",
          message: "There is no selected element...",
        });
      }
      const address = result.length > 1 ? result[0] : result;
      const keysToExclude = ["userId", "created_at"];
      const sortedAddress = JSON.stringify(
        Object.keys(address).reduce((acc, key) => {
          if (!keysToExclude.includes(key)) {
            acc[key] = address[key];
          }
          return acc;
        }, {})['0']
      );
      res.status(200).json({
        status: 200,
        process: "get",
        message: sortedAddress,
      });
    })
    .catch((err) => console.log(err));
};

exports.deleteAddress = async (req, res, next) => {
  const addressId = req.body.addressId;
  console.log(addressId);
  const addresses = new AddressQueries();
  await addresses
    .deleteAddress(addressId)
    .then((result) => {
      res.status(201).json({
        status: 201,
        process: "delete",
        message: addressId,
      });
    })
    .catch((err) => console.log(err));
};

exports.deleteAllAddresses = async (req, res, next) => {
  const userId = req.session.user.id;

  const addresses = new AddressQueries();
  await addresses
    .deleteAllAddresses(userId)
    .then((result) => {
      res.status(201).json({
        status: 201,
        process: "deleteAll",
        message: result,
      });
    })
    .catch((err) => console.log(err));
};

exports.putAddress = async (req, res, next) => {
  const { addressData, addressId } = req.body.data;
  const userId = req.session.user.id;

  console.log(addressId, userId);
  const addresses = new AddressQueries();
  await addresses
    .putAddress(addressData, addressId, userId)
    .then((result) => {
      const address = result.length > 1 ? result[0] : result;
      const keysToExclude = ["userId", "created_at"];
      const sortedAddress = JSON.stringify(
        Object.keys(address).reduce((acc, key) => {
          if (!keysToExclude.includes(key)) {
            acc[key] = address[key];
          }
          return acc;
        }, {})['0']
      );
      res.status(201).json({
        status: 201,
        process: "put",
        message: sortedAddress,
      });
    })
    .catch((err) => console.log(err));
};

exports.selectAddress = async (req, res, next) => {
  const { addressId } = req.body;
  const userId = req.session.user.id;
  const addresses = new AddressQueries();
  await addresses
    .selectAddress(addressId, userId)
    .then((result) => {
      const address = result.length > 1 ? result[0] : result;
      const keysToExclude = ["userId", "created_at"];
      const sortedAddress = JSON.stringify(
        Object.keys(address).reduce((acc, key) => {
          if (!keysToExclude.includes(key)) {
            acc[key] = address[key];
          }
          return acc;
        }, {})['0']
      );
      return res.status(201).json({
        status: 201,
        process: "select",
        message: sortedAddress,
      });
    })
    .catch((err) => err);
};
