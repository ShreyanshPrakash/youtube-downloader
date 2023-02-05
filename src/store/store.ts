import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { reducer } from 'store/slices';

export const store = configureStore({
    reducer: reducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

// infer types based on the state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
 >;

/*
    Consider useEffect,
    It return [state, dispatchOfState]
    similarly above, RootState is the state, and
    AppDispatch is dispatch of the State
*/