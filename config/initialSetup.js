import Category from '../models/Category.js';

export const createCategories = async () => {
    try {
        const count = await Category.estimatedDocumentCount();

        if (count > 0) {
            return;
        }

        const values = await Promise.all([
            new Category({ name: 'red' }).save(),
            new Category({ name: 'green' }).save(),
            new Category({ name: 'yellow' }).save()
        ]);

        console.log(values);
    } catch (error) {
        console.log(error);
    }
};
