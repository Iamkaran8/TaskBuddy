import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../fireBase/fireBaseConfig";
import { RootState } from "../store/Store";

interface authState {
  userDetails: {
    userName: string | null;
    email: string | null;
    profileImg: string | null,
  };
  error : boolean | any
}

const initialState: authState = {
  userDetails: {
    userName: null,
    email: null,
    profileImg:   null,
    

  },
  error : false
};

export const HandleSignIn = createAsyncThunk("auth/signin", async () => {
  const provider = new GoogleAuthProvider();
  const data = await signInWithPopup(auth, provider);

  return {
    userDetails: {
      userName: data.user.displayName,
      email: data.user.email,
      profileImg : data.user.photoURL
    },
  };
});

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    HandleLogout: (state) => {
      auth.signOut().then(() => {
        console.log("user Loged Out");
      });
      state.userDetails = { userName: null, email: null, profileImg:null };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(HandleSignIn.fulfilled, (state, action) => {
        state.userDetails = action.payload.userDetails;
      })
      .addCase(HandleSignIn.rejected, (state,action) => {
        console.log("The Error Is", action.payload);
        state.error = action.payload
      });
  },
});

export const AuthReducer = AuthSlice.reducer;
export const { HandleLogout } = AuthSlice.actions;
export const selectUser = (state: RootState) => state.Auth.userDetails;
export const selelctError = (state: RootState) => state.Auth.error

