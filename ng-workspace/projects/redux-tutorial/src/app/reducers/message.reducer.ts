import { Action, createReducer, on } from '@ngrx/store';
import { setMessage } from '../actions/message.actions';


export const messageFeatureKey = 'message';

export interface State {
    message : string;
}

export const initialState: State = {
    message: 'hello'
};

const messageReducer = createReducer(
    initialState,
    on(setMessage, (state, action) => ({...state, message: action.newMessage}))
);

export function reducer(state: State | undefined, action: Action) {
  return messageReducer(state, action);
}
