import * as mongoose from 'mongoose'
export const productSchema = new mongoose.Schema({
    name : {type : String},
    price : {type : Number, default : 0},
    description : {type : String}
})
export interface product {
        id : string;
        name : string;
        price : string;
        description : string;
}