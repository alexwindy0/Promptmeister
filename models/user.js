import { Schema, model, models  } from "mongoose";


const userSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image: {
        type: String,
    }
});

//The "models" object is registered by the mongoose library and it stores all the registered models.

//if a model is named "User" already exists in the "models" object, it assigns that existing model to the "User" variable.

//This is going to prevent redefining the mofel and ensure that the existing model is reused.



const User = models.User || model("User", userSchema);

export default User;