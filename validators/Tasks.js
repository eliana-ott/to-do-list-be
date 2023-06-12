import { check } from 'express-validator';
import Categories from '../constants/Categories.js';
import { validateResult } from './validateResult.js';

export const ValidatePostTasks = [
    check('title')
        .exists()
        .notEmpty()
        .isLength({ min: 3 })
        .isString(),
    check('description')
        .exists()
        .notEmpty()
        .isString(),
    check('endDate')
        .exists()
        .notEmpty()
        .toDate(),
    check('category')
        .isIn(Categories),
    validateResult
];
