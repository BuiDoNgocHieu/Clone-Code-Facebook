const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserModel = new Schema(
    {
        create_uid: {
            type: Schema.Types.ObjectId,
            default: null,
        },
        create_date: {
            type: Date,
            default: Date.now,
        },
        delete_uid: {
            type: Schema.Types.ObjectId,
            default: null,
        },
        delete_date: {
            type: Schema.Types.ObjectId,
            default: null,
        },
        status: {
            type: Boolean,
            default: true,
            required: true,
        },

        lastName: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },

    },
    { collection: "user" }
);

module.exports = mongoose.model("user", UserModel);
