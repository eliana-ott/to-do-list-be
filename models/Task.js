import { Schema, model } from 'mongoose';

const tasksSchema = Schema(
    {
        title: {
            type: 'string',
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: false,
            trim: true
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: 'Category'
        },
        endDate: {
            type: Date,
            required: true,
        },
        isCompleted: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default model('Task', tasksSchema);
