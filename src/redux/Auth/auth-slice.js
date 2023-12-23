import { createSlice } from "@reduxjs/toolkit";
import { 
register, 
logIn, 
logOut,
initialDataUserInfo,
refreshCurrentUser,
updateUserInfo,
updateUserAvatar, 
} from "./auth-operations";


const initialState = {
  userForm: {
    name: null,
    email: null,
    password: null,
  },
  goalForm: {
    goal: null,
  },
  genderAgeForm: {
    gender: null,
    age: null,
  },
  bodyParamFormWeight: {
    weight: null,
  },
  bodyParamFormHeight: {
    height: null,
  },
  activityForm: {
    activity: null,
  },
  token: null,
  avatarURL: null,
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
  isInitial: false,
  error: null,
};


const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    saveSignUpForm: (state, action) => {
      state.userForm = {
        ...state.userForm,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      };
    },
    updateGoalForm: (state, action) => {
      state.goalForm = {
        ...state.goalForm,
        goal: action.payload,
      };
    },
    updateGenderAgeForm: (state, action) => {
      state.genderAgeForm = {
        ...state.genderAgeForm,
        gender: action.payload.gender,
        age: action.payload.age,
      }
    },
    updateBodyParamForm: (state, action) => {
      state.bodyParamForm ={
        ...state.bodyParamForm,
        height: action.payload.height,
        weight: action.payload.weight,
      }
    },
    updateActivityForm: (state, action) => {
      state.activityForm = {
        ...state.activityForm,
        activity: action.payload,
      }
    },
  },

  extraReducers: builder => {
    builder
    // REGISTER///////////
    .addCase(register.pending, state =>{
      state.isLoading = true;
      state.error = null;
      state.isInitial = true;
    })
    .addCase(register.fulfilled, (state, { payload }) => {
      state.userForm = {
        name: payload.data.name,
      };
      state.goalForm = {
        goal: payload.data.goal,
      };
      state.bodyParamFormWeight = {
        weight: payload.data.weight,
      };
      state.avatarURL = payload.data.avatarURL;
      state.token = payload.token;
      state.isLoading = false;
      state.isLoggedIn = true;
      state.isInitial = true;
      state.error = null;
    })
    .addCase(register.rejected, (state, {payload}) => {
      state.isLoading = false;
      state.isInitial = false;
      state.token = null;
      state.error = payload;
    })


    //LOGIN/////////////// 
    .addCase(logIn.pending, state => {
      state.isLoading = true;
      state.error = null;
      state.isInitial = true;
    })
    .addCase(logIn.fulfilled, (state, {payload}) => {
      state.userForm = {
        name: payload.data.name,
      };
      state.bodyParamFormWeight = {
        weight: payload.data.weight,
      };
      state.goalForm = {
        goal: payload.data.goal,
      };
      state.avatarURL = payload.data.avatarURL;
      state.token = payload.token;
      state.isLoading = false;
      state.isLoggedIn = true;
      state.isInitial = true;
      state.error = null;
    })
    .addCase(logIn.rejected, (state, {payload}) => {
      state.isLoading = false;
      state.isInitial = false;
      state.error = payload;
    })


    // INITIAL CURRENT USER////////
    .addCase(initialDataUserInfo.pending, state => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(initialDataUserInfo.fulfilled, (state, { payload }) => {
      state.genderAgeForm = {
        gender: payload.data.gender,
        age: payload.data.age,
      };
      state.bodyParamFormHeight = {
        height: payload.data.height,
      };
      state.activityForm = {
        activity: payload.data.activity,
      };
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    })
    .addCase(initialDataUserInfo.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    })


    // LOGOUT////////
    .addCase(logOut.pending, state =>{
      state.isLoading = true;
      state.error = null;
    })
    .addCase(logOut.fulfilled, (state, { payload }) => {
      state.userForm = {
        name: null,
        email: null,
        password: null,
      };
      state.goalForm = {
        goal: null,
      };
      state.genderAgeForm = {
        gender: null,
        age: null,
      };
      state.bodyParamFormHeight = {
        height: null,
      };
      state.bodyParamFormWeight = {
        weight: null,
      };
      state.activityForm = {
        activity: null,
      };
      state.avatarURL = null;
      state.token = null;
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = null;
      state.isInitial = false;
    })
    .addCase(logOut.rejected, (state, {payload}) => {
      state.isLoading = false;
      state.error = payload;
    })


    // REFRESH CURRENT USER////////
    .addCase(refreshCurrentUser.pending, state => {
      state.isLoading = true;
      state.isRefreshing = true;
      state.isInitial = false;
    })
    .addCase(refreshCurrentUser.fulfilled, (state, { payload }) => {
      state.userForm = {
        name: payload.data.name,
        email: payload.data.email,
      };
      state.goalForm = {
        goal: payload.data.goal,
      };
      state.genderAgeForm = {
        gender: payload.data.gender,
        age: payload.data.age,
      };
      state.bodyParamFormHeight = {
        height: payload.data.height,
      };
      state.bodyParamFormWeight = {
        weight: payload.data.weight,
      };
      state.activityForm = {
        activity: payload.data.activity,
      };
      state.avatarURL = payload.data.avatarURL;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.isLoading = false;
      state.isInitial = false;
      state.error = null;
    })
    .addCase(refreshCurrentUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isRefreshing = false;
      state.isInitial = false;
      state.error = payload;
    })


    // UPDATE USER INORMATION////////
    .addCase(updateUserInfo.pending, state => {
      state.isLoading = true;
      state.isInitial = false;
    })
    .addCase(updateUserInfo.fulfilled, (state, { payload }) => {
      state.userForm = {
        name: payload.data.name,
        email: payload.data.email,
        password: payload.data.password,
      };
      state.goalForm = {
        goal: payload.data.goal,
      };
      state.genderAgeForm = {
        gender: payload.data.gender,
        age: payload.data.age,
      };
      state.bodyParamFormHeight = {
        height: payload.data.height,
      };
      state.bodyParamFormWeight = {
        weight: payload.data.weight,
      };
      state.activityForm = {
        activity: payload.data.activity,
      };
      state.avatarURL = payload.data.avatarURL;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isInitial = false;
      state.error = null;
    })
    .addCase(updateUserInfo.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isInitial = false;
      state.error = payload;
    })


    // UPDATE AVATAR/////
    .addCase(updateUserAvatar.pending, state => {
      state.isLoading = true;
      state.isInitial = false;
    })
    .addCase(updateUserAvatar.fulfilled, (state, { payload }) => {
      state.avatarURL = payload.avatarURL;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isInitial = false;
      state.error = null;
    })
    .addCase(updateUserAvatar.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isInitial = false;
      state.error = payload;
    })
  } 
}); 


export const authReducer = authSlice.reducer;


export const { 
  saveSignUpForm,
  updateGoalForm,
  updateGenderAgeForm,
  updateBodyParamForm,
  updateActivityForm,

} = authSlice.actions;



