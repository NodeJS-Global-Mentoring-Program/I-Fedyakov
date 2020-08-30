import { createValidator } from 'express-joi-validation';
import { userSchema } from './user-schema';

const validator = createValidator();
validator.body(userSchema);

export default validator.body(userSchema);
