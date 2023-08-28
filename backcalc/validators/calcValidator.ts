import { body } from 'express-validator';
import formatElExp from '../calcFuncs/workWithInput';

const calcValidator = body('exp').trim().notEmpty().exists().custom(value => {
  return formatElExp(value);
})


export default calcValidator;