import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit";
import axios from "axios";
// const local_url = "http://localhost:8987";
// const local_url = "https://anthagallery.site";
const local_url = "https://anthagallery-server.up.railway.app";

// Get all product
export const getAllProducts = createAsyncThunk(
    'admin/getAllProducts',
    async () => {
        try {
            const response = await axios({
                method: "GET",
                url: `${local_url}/api/v1/product/read`,
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json",
                    "Access-Control-Allow-Credentials": true,
                }
            })
            return response.data;
        } catch (error) {
            return error.response.data
        }
    }
);

// get product by id
export const getProductById = createAsyncThunk(
    'admin/getProductById',
    async (id) => {
        try {
            const token = localStorage.getItem("token")
            const response = await axios({
                method: "GET",
                url: `${local_url}/api/v1/product/read/${id}`,
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json",
                    "Access-Control-Allow-Credentials": true,
                    Authorization: `Bearer ${token}`
                }
            })
            return response.data;
        } catch (error) {
            return error.response.data
        }
    }
);

// get category by id
export const getCategoryById = createAsyncThunk(
    'admin/getCategoryById',
    async (id) => {
        try {
            const token = localStorage.getItem("token")
            const response = await axios({
                method: "GET",
                url: `${local_url}/api/v1/category/readAdmin/${id}`,
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json",
                    "Access-Control-Allow-Credentials": true,
                    Authorization: `Bearer ${token}`
                }
            })
            return response.data;
        } catch (error) {
            return error.response.data
        }
    }
);

// Delete Category By Id
export const deleteCategoryById = createAsyncThunk(
    'admin/deleteCategoryById',
    async (id) => {
        try {
            const token = localStorage.getItem("token")
            const response = await axios({
                method: "DELETE",
                url: `${local_url}/api/v1/category/delete/${id}`,
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json",
                    "Access-Control-Allow-Credentials": true,
                    Authorization: `Bearer ${token}`
                }
            })
            return response.data;
        } catch (error) {
            return error.response.data
        }
    }
);

// Delete Category By Id
export const deleteProductById = createAsyncThunk(
    'admin/deleteProductById',
    async (id) => {
        try {
            const token = localStorage.getItem("token")
            const response = await axios({
                method: "DELETE",
                url: `${local_url}/api/v1/product/delete/${id}`,
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json",
                    "Access-Control-Allow-Credentials": true,
                    Authorization: `Bearer ${token}`
                }
            })
            return response.data;
        } catch (error) {
            return error.response.data
        }
    }
);

// get All History Chat
export const getAllHistoryChat = createAsyncThunk(
    'admin/getAllHistoryChat',
    async () => {
        try {
            const response = await axios({
                method: "GET",
                url: `${local_url}/api/v1/chatHistory/read`,
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json",
                    "Access-Control-Allow-Credentials": true,
                }
            })
            return response.data;
        } catch (error) {
            return error.response.data
        }
    }
);

const initialState = {
    getDataHistoryChat: {},
    getDataProducts: {},
    getDataCategories: {},
    getDataProductDelete: {},
    getDataProductSingle: {},
    getDataCategorySingle: {},
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        // Product
        // Get All products
        [getAllProducts.pending]: (state, action) => {
            return {
                ...state
            }
        },
        [getAllProducts.fulfilled]: (state, action) => {
            return {
                ...state,
                getDataProducts: action.payload.data.get_all_product
            }
        },
        [getAllProducts.rejected]: (state, action) => {
            return {
                ...state
            }
        },

        // Get product by id
        [getProductById.pending]: (state, action) => {
            return {
                ...state
            }
        },
        [getProductById.fulfilled]: (state, action) => {
            return {
                ...state,
                getDataProductSingle: action.payload.data.get_product_By_Id
            }
        },
        [getProductById.rejected]: (state, action) => {
            return {
                ...state
            }
        },

        // Get Category by id
        [getCategoryById.pending]: (state, action) => {
            return {
                ...state
            }
        },
        [getCategoryById.fulfilled]: (state, action) => {
            return {
                ...state,
                getDataCategorySingle: action.payload.data.get_category_product_By_Id
            }
        },
        [getCategoryById.rejected]: (state, action) => {
            return {
                ...state
            }
        },

        // Delete Category By Id
        [deleteCategoryById.pending]: (state, action) => {
            return {
                ...state
            }
        },
        [deleteCategoryById.fulfilled]: (state, action) => {
            return {
                ...state,
                getDataCategories: action.payload.data
            }
        },
        [deleteCategoryById.rejected]: (state, action) => {
            return {
                ...state
            }
        },

        // Delete Category By Id
        [deleteProductById.pending]: (state, action) => {
            return {
                ...state
            }
        },
        [deleteProductById.fulfilled]: (state, action) => {
            return {
                ...state,
                getDataProductDelete: action.payload.data
            }
        },
        [deleteProductById.rejected]: (state, action) => {
            return {
                ...state
            }
        },

        // Get All History Chat
        [getAllHistoryChat.pending]: (state, action) => {
            return {
                ...state
            }
        },
        [getAllHistoryChat.fulfilled]: (state, action) => {
            return {
                ...state,
                getDataHistoryChat: action.payload.data.get_all_history_chat
            }
        },
        [getAllHistoryChat.rejected]: (state, action) => {
            return {
                ...state
            }
        },
    }
})

export default userSlice.reducer;