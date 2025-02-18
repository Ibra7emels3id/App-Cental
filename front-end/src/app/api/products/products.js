import axios from "axios";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

// Add Product 
export const AddProduct = async (formData) => {
    await axios.post(`http://localhost:9000/api/product`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then((res) => {
        toast.success('Product added successfully')
        return;
    }).catch((err) => {
        toast.error('Failed to add product');
    })
}

// Edit Product
export const EditProduct = async (id , formData) => {
    try {
        const res = await axios.put(`${process.env.NEXT_PUBLIC_SERVER}/api/product/edit/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        toast.success('Product updated successfully');
    } catch (error) {
        console.error(error);
    }
}

// Delete Product
export const DeleteProduct = async (id) => {
    try {
        const res = await axios.delete(`${process.env.NEXT_PUBLIC_SERVER}/api/product/${id}`);
        console.log(res.data);
    } catch (error) {
        console.error(error);
    }
}