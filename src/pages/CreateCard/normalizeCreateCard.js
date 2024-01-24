const toServerCreate = (datatoServer) => {
  return {
    title: datatoServer.title,
    subTitle: datatoServer.subtitle,
    description: datatoServer.description,
    phone: datatoServer.phone,
    email: datatoServer.email,
    web: datatoServer.web,

    image: {
      url: datatoServer.image.url,
      alt: datatoServer.image.alt,
    },
    adress: {
      state: datatoServer.address.state,
      country: datatoServer.address.country,
      city: datatoServer.address.city,
      street: datatoServer.address.street,
      houseNumber: datatoServer.address.houseNumber,
      zip: datatoServer.address.zip,
    },
  };
};
export { toServerCreate };
