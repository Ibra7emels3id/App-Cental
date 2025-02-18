'use client'
import axios from "axios";
import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext([]);


export const AuthProviderContext = ({ children }) => {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState([])
    const [Reviews, setReviews] = useState([]);
    const [order, setOrder] = useState([])
    const [orders, setOrders] = useState([])
    const { data: user } = useSession();
    const [loading, setLoading] = useState(true);
    const [Users, setUsers] = useState([]);
    const [User, setUser] = useState([]);

    // Get all products
    const getAllProducts = async () => {
        try {
            const response = await axios.get(`https://app-cental-server.onrender.com/api/product`);
            setProducts(response.data.products);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    // Get all Category
    const getAllCategory = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/category`);
            setCategory(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    // Get Order Id
    const getAllOrder = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/order/${user?.user?.id}`);
            setOrder(response.data);
            // console.log(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    // Get all Orders
    const getAllOrders = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/order`);
            setOrders(response.data);
            // console.log(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    // Get all Reviews
    const getAllReviews = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/reviews`);
            setReviews(response.data);
            // console.log(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    // Get all Users
    const getAllUsers = async () => {
        try {
            const response = await axios.get(`/api/users`);
            setUsers(response?.data?.data?.users.filter(user => user.role !== 'admin'));
            // console.log(response.data.data?.users);
        } catch (error) {
            console.error("Error fetching Users:", error);
        }
    };

    // Get all Users
    const getAllUser = async () => {
        try {
            const response = await axios.get(`/api/user/${user?.user?.id}`);
            setUser(response.data.data?.user);
            // console.log(response.data?.user);
        } catch (error) {
            console.error("Error fetching Users:", error);
        }
    };





    // Use Effect
    useEffect(() => {
        getAllProducts();
        getAllCategory();
        getAllOrders();
        getAllReviews()
        getAllUsers()
        if (user?.user?.id) {
            getAllOrder();
            getAllUser()
        }
    }, [user?.user?.id]);



    return (
        <AuthContext.Provider value={{ products, getAllProducts, category, getAllCategory, order, getAllOrder, orders, getAllOrders, Reviews, getAllReviews ,Users , getAllUsers , User , getAllUser }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext);