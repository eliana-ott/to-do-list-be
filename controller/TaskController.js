import Task from '../models/Task.js';
import Category from '../models/Category.js';

export const addTask = async (request, response) => {
    try {
        const task = request.body;
        const category = await Category.findOne({ name: task.category });

        const newTask = {
            ...task,
            category: category._id
        };

        const result = await Task.create(newTask);
        const savedTask = await Task
            .findById(result._id)
            .populate('category')
            .exec();

        response.json(savedTask);
    } catch (error) {
        console.error(error);
        response
            .status(500)
            .send('hubo un error al agregar la tarea');
    }
};

export const getTasks = async (req, response) => {
    try {
        const tasks = await Task
            .find()
            .populate('category')
            .exec();
        response.json(tasks);
    } catch (error) {
        console.error(error);
        response
            .status(500)
            .send('hubo un error al obtener las tareas');
    }
};

export const deleteTask = async (request, response) => {
    try {
        const _id = request.params.taskId;
        const task = await Task.findById(_id);
        
        if (!task) {
            return response
                .status(404)
                .json({ msg: 'no existe esa tarea' });
        }

        const result = await Task.findByIdAndDelete(_id);

        if (!result) {
            return response
                .status(500)
                .json({ msg: 'no se ha podido eliminar la tarea' });
        }

        response.json({ msg: 'se ha eliminado la tarea correctamente' });
    } catch (error) {
        console.error(error);
        response
            .status(500)
            .send('hubo un error al borrar la tarea');
    }
};

export const changeTaskStatus = async (request, response) => {
    try {
        const _id = request.params.taskId;
        const task = request.body;

        const currentTask = await Task
            .findById(_id)
            .lean()
            .exec();
        
        if (!currentTask) {
            return response
                .status(404)
                .json({ msg: 'no existe esa tarea' });
        }

        const updatedAttributes = {
            isCompleted: task.isCompleted
        };

        const result = await Task.findByIdAndUpdate(_id, updatedAttributes);

        if (!result) {
            return response
                .status(500)
                .json({ msg: 'no se ha podido actualizar la tarea' });
        }

        response.json({ msg: 'se ha actualizado la tarea correctamente' });
    } catch (error) {
        console.error(error);
        response
            .status(500)
            .send('hubo un error al actualizar la tarea');
    }
};
