import Joi from "joi";

const profileImageSchema = Joi.string();
const nameSchema = Joi.string().min(2).max(256).required();
const middleNameSchema = Joi.string().min(2).max(256).optional();
const phoneSchema = Joi.string().min(9).max(11).required();
const urlSchema = Joi.string().min(14).max(256).allow("").optional();
const altSchema = Joi.string().min(2).max(256).allow("").optional();
const stateSchema = Joi.string().min(2).max(256).allow("").optional();
const countrySchema = Joi.string().min(2).max(256).required();
const citySchema = Joi.string().min(2).max(256).required();
const streetSchema = Joi.string().min(2).max(256).required();
const housenumberSchema = Joi.number().min(1).max(256).required();
const zipSchema = Joi.number().min(2).max(9999999).allow("").optional();
const isBusinessSchema = Joi.boolean().required();

const editUserSchema = Joi.object({
  profileImage: profileImageSchema,
  first: nameSchema,
  middle: middleNameSchema,
  last: nameSchema,
  phone: phoneSchema,
  url: urlSchema,
  alt: altSchema,
  state: stateSchema,
  country: countrySchema,
  city: citySchema,
  street: streetSchema,
  houseNumber: housenumberSchema,
  zip: zipSchema,
  isBusiness: isBusinessSchema,
}).id("editUserSchema");

export default editUserSchema;
