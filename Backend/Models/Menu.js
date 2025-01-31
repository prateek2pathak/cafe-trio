import {Schema,model} from "mongoose";

const menu_schema = Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        default:''
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        // enum: ['Beverages', 'Snacks', 'Meals', 'Desserts'], // Example categories
    },
    image: {
        type: String, // URL for the item's image
        default: '',
    },
    et:{
        type:Number,
        default: 10
    },
    availability: {
        type: Boolean,
        default: true, // THis will change css accordingly make it darker
    },
}) 

const Menu = model('Menu',menu_schema);
export default Menu;