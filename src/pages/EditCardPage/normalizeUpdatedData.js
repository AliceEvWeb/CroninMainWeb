const normalizeUpdatedData = (inputsValue) => {
  return {
    name: {
      first: inputsValue.name.first,
      middle: inputsValue.name.middle,
      last: inputsValue.name.last,
    },
    phone: inputsValue.phone,
    image: {
      url: inputsValue.image?.url || inputsValue.url,
      alt: inputsValue.image?.alt || inputsValue.alt,
    },
    address: {
      state: inputsValue.address.state,
      country: inputsValue.address.country,
      city: inputsValue.address.city,
      street: inputsValue.address.street,
      houseNumber: inputsValue.address.houseNumber,
      zip: inputsValue.address.zip,
    },
    price: inputsValue.price,
  };
};

export { normalizeUpdatedData };
