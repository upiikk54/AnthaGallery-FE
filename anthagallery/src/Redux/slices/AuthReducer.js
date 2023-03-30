import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit";
import axios from "axios";
// import { parseJwt } from "../../Helpers/ParseJWT";
// import { encryptLocalStorage } from '../../Helpers/Encryption/encryptLocalStorage'
const local_url = "http://localhost:8987";

export const authRegister = createAsyncThunk(
    'auth/Register',
    async (user) => {
        try {
            const response = await axios({
                method: "POST",
                data: user,
                url: `${local_url}/api/v1/register`
            })
            return response.data;
        } catch (error) {
            return error.response.data
        }
    }
);

// export const authLogin = createAsyncThunk(
//     'auth/Login',
//     async (user) => {
//         try {
//             const response = await axios({
//                 method: "POST",
//                 data: user,
//                 url: `${local_url}/api/v1/login`
//             })
//             return response.data;
//         } catch (error) {
//             return error.response.data
//         }
//     }
// );

export const getUsers = createAsyncThunk(
    'auth/Users',
    async () => {
        try {
            const token = localStorage.getItem("token")
            const response = await axios({
                method: "GET",
                url: `${local_url}/api/v1/me`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return response.data;
        } catch (error) {
            return error.response.data
        }
    }
);

const initialState = {
    dataUsers: {},
    getDataUserWithToken: {}
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        // Register
        [authRegister.pending]: (state, action) => {
            return {
                ...state
            }
        },
        [authRegister.fulfilled]: (state, action) => {
            return {
                ...state
            }
        },
        [authRegister.rejected]: (state, action) => {
            return {
                ...state
            }
        },

        // Login
        // [authLogin.pending]: (state, action) => {
        //     return {
        //         ...state
        //     }
        // },
        // [authLogin.fulfilled]: (state, action) => {
        //     if (action.payload.status) {
        //         localStorage.setItem("token", action.payload.data.token)
        //     }
        //     return {
        //         ...state,
        //         dataUsers: action.payload.data.loginUsers
        //     }
        // },
        // [authLogin.rejected]: (state, action) => {
        //     return {
        //         ...state
        //     }
        // },

        // // Auth me
        [getUsers.pending]: (state, action) => {
            return {
                ...state
            }
        },
        [getUsers.fulfilled]: (state, action) => {
            return {
                ...state,
                dataUserWithToken: action.payload.data.user
            }
        },
        [getUsers.rejected]: (state, action) => {
            return {
                ...state
            }
        },
    }
})

export default authSlice.reducer;