import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {reducer, State as MessageState} from './message.reducer';

export interface State {
    message : MessageState
}

export const reducers: ActionReducerMap<State> = {
    message: reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
