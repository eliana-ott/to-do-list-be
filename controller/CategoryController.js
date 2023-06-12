import Category from '../models/Category.js';

export const getCategories = async (req, response) => {
    try {
        const categories = await Category.find();
        response.json(categories);
    } catch (error) {
        console.error(error);
    }
};
