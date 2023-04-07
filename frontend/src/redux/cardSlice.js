import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createRandomCards } from "../utils/createRandomCards";
import { filterArr } from "../utils/filterArray";
import { isArrEmpty } from "../utils/isArrEmpty";
import axios from "axios";
import { addUserToLocalStorage, getUserFromLocalStorage } from "../utils/localStorage";
import API from "../utils/axios";

const deckState = {
    cards: [],
    defuseCards: 0,
    gameState: 'PLAYING',
    currentCard: "",

}



const initialState = {
    userName: "",
    score: 0,
    id: "",
    ...deckState,

}



export const registerUser = createAsyncThunk('user/register', async (user, thunkAPI) => {

    try {



        const resp = await API.post('/username', user);

        return resp.data;

    } catch (error) {
        // console.log('gggg');
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }


})

export const addScore = createAsyncThunk('/score', async (user, thunkAPI) => {

    console.log("49", user);

    try {
        const resp = await API.put(`/score/${user.id}`, user)
        // console.log('addsc catch');
        return resp.data;
    } catch (error) {

        console.log('addsc catch');

        return thunkAPI.rejectWithValue(error.response.data.msg);

    }

})



export const getAllScore = createAsyncThunk('/records', async (user, thunkAPI) => {

    try {
        const resp = await API.get('/records');

        return resp.data;

    } catch (error) {

        return thunkAPI.rejectWithValue(error.response.data.msg);

    }


})





const cardSlice = createSlice({

    name: 'card',
    initialState,
    records: [],
    reducers: {

        catCard: (state, action) => {

            console.log(action.payload);
            state.currentCard = "Cat Card"
            state.cards = filterArr(state.cards, action.payload)



        },
        defuseCard: (state, action) => {
            state.currentCard = "Defuse Card"
            state.defuseCards++;
            state.cards = filterArr(state.cards, action.payload)

        },
        explodeCard: (state, action) => {

            state.currentCard = "Explode Card"

            if (state.defuseCards === 0) {
                state.gameState = "LOST";
                state = { ...initialState };
            }
            else {
                state.defuseCards--;

                state.cards = filterArr(state.cards, action.payload);
            }

        },
        suffleCard: (state, action) => {

            state.currentCard = "Suffle Card"

            state.cards = createRandomCards();

        },
        setUsername: (state, action) => {

            // console.log(action.payload);

            state.userName = action.payload.userName;
            state.id = action.payload.id
            addUserToLocalStorage(state);

        },
        startGame: (state) => {

            const is = getUserFromLocalStorage();

            // state = { ...initialState }

            state.userName = is.userName;
            state.score = is.score;
            state.id = is.id;
            state.gameState = "PLAYING"
            state.cards = createRandomCards();
            state.currentCard = "";
            state.defuseCards = 0;
        },
        setPrevState: (state, action) => {

            // console.log('ggg');

            // console.log(action.payload);

            state.cards = action.payload.cards
            state.defuseCards = action.payload.defuseCards
            state.gameState = action.payload.gameState
            state.score = action.payload.score
            state.userName = action.payload.userName;
            state.id = action.payload.id;

            // console.log(state);
        },
        emptyState: (state, action) => {

            const un = state.userName;
            const s = state.score;
            const id = state.id;
            console.log(s, action);
            state = { ...deckState, }

            state.userName = un;
            state.id = id;
            state.score = s;
            state.gameState = "PLAYING"
            if (action.payload === "WON") {
                state.score = s + 1;
            }


            addUserToLocalStorage(state)
        },
        incWon: (state) => {
            state.score++;
        }

    },

    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state, action) => {

            console.log('pending');

        }).addCase(registerUser.fulfilled, (state, action) => {
            console.log(action.payload.id);
            state.id = action.payload.id;
            addUserToLocalStorage(state)
            console.log('fulfilled');
        }).addCase(registerUser.rejected, (state, action) => {
            console.log('rejected');
        }).addCase(addScore.pending, (state, action) => {

            console.log('pending');

        }).addCase(addScore.fulfilled, (state, action) => {
            console.log('fulfilled');
        }).addCase(addScore.rejected, (state, action) => {
            console.log('rejected');
        }).addCase(getAllScore.pending, (state, action) => {

            console.log('pending');

        }).addCase(getAllScore.fulfilled, (state, action) => {
            console.log('fulfilled');
            state.records = action.payload;
        }).addCase(getAllScore.rejected, (state, action) => {
            console.log('rejected');
        })
    }

})

export const { setUsername, handleDraw, startGame, catCard, defuseCard, explodeCard, suffleCard, setPrevState, emptyState, incWon } = cardSlice.actions;

export default cardSlice.reducer;