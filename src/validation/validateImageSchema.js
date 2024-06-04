import Joi from "joi";

const validateImageSchema = (file) => {
  const schema = Joi.object({
    image: Joi.string()
      .required()
      .regex(
        /(.*\.([jJ][pP][gG]|[pP][nN][gG]|[gG][iI][fF]|[bB][mM][pP]|[tT][iI][fF][fF]|[wW][eE][bB][pP]|[sS][vgvg])$)/
      ),
  });

  const { error } = schema.validate(
    { image: file.name },
    { abortEarly: false }
  );

  if (!error) return null;

  const { details } = error;
  const message = details.map((i) => i.message).join(", ");

  return {
    message,
  };
};

export default validateImageSchema;
