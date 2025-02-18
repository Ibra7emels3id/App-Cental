import axios from "axios";

// Delete Product
export const DeleteOrder = async (id) => {
    try {
        const res = await axios.delete(`${process.env.NEXT_PUBLIC_SERVER}/api/order/${id}`);
        console.log(res.data);
    } catch (error) {
        console.error(error);
    }
}