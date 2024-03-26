import { Schema, model } from "mongoose";

export interface IGod {
    _id : string,
    name : string,
    title : string,
    boons : Array<String>,
    __v : string,
}

const godSchema : Schema = new Schema({
    name : {
        type: String,
        required: true,
    },
    title : String,
    boons : Array<String>,
})

export default model<IGod>('God', godSchema);