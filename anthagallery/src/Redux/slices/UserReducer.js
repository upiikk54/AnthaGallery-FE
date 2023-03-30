import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit";
import axios from "axios";
const local_url = "http://localhost:8987";

export const getAllCategories = createAsyncThunk(
    'user/getAllCategories',
    async () => {
        try {
            const response = await axios({
                method: "GET",
                url: `${local_url}/api/v1/category/read`,
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

export const getProductByCategoryId = createAsyncThunk(
    'admin/getProductByCategoryId',
    async (category_id) => {
        try {
            const response = await axios({
                method: "GET",
                url: `${local_url}/api/v1/product/readCategory/${category_id}`,
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

export const getProductById = createAsyncThunk(
    'admin/getProductById',
    async (id) => {
        try {
            const response = await axios({
                method: "GET",
                url: `${local_url}/api/v1/product/user/read/${id}`,
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
    getDataCategories: {},
    getDataCategoriesSingle: {},
    getDataProductSingle: {},
}

const userSlice = createSlice ({
    name: 'user',
    initialState,
    extraReducers: {
        // Category
        // Get all category
        [getAllCategories.pending]: (state, action) => {
            return {
                ...state
            }
        },
        [getAllCategories.fulfilled]: (state, action) => {
            return {
                ...state,
                getDataCategories: action.payload.data.get_all_product_category
            }
        },
        [getAllCategories.rejected]: (state, action) => {
            return {
                ...state
            }
        },

        // Get Product By CategoryId
        [getProductByCategoryId.pending]: (state, action) => {
            return {
                ...state
            }
        },
        [getProductByCategoryId.fulfilled]: (state, action) => {
            return {
                ...state,
                getDataCategoriesSingle: action.payload.data.get_product_By_CategoryId
            }
        },
        [getProductByCategoryId.rejected]: (state, action) => {
            return {
                ...state
            }
        },

        // Get Product By Id
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
    }
})

export default userSlice.reducer;
