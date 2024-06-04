const fromServer = (dataFromServer) => {
  return {
    title: dataFromServer.title,
    subtitle: dataFromServer.subtitle,
    description: dataFromServer.description,
    price: dataFromServer.price,
    phone: dataFromServer.phone,
    email: dataFromServer.email,
    web: dataFromServer.web,
    img: dataFromServer.image.url,
    alt: dataFromServer.image.alt,
    state: dataFromServer.address.state,
    country: dataFromServer.address.country,
    city: dataFromServer.address.city,
    street: dataFromServer.address.street,
    houseNumber: dataFromServer.address.houseNumber,
    zip: dataFromServer.address.zip,
  };
};
export { fromServer };
