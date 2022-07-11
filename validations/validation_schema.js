import Joi from 'joi'

const authSchema1=Joi.object().keys({
    name:Joi.string().required(),
    card:Joi.number().required(),
    items:Joi.required()
})

export default authSchema1