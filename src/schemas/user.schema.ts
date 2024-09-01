import {object, string} from "zod";

const userSchema = object({
    name: string({required_error: "Name is required"}),
    email: string({required_error: "Email is required"})
        .email("Not valid email address"),
    password: string({required_error: "Passwors is required"})
        .min(8, "Password must be atleast 8 characters long"),
})

export default userSchema;
   
