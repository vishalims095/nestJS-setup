import * as mongoose from 'mongoose'
export const productSchema = new mongoose.Schema({
    title : {type : String},
    price : {type : Number, default : 0},
    description : {type : String}
})
export interface product {
        id : string;
        title : string;
        price : string;
        description : string;
}