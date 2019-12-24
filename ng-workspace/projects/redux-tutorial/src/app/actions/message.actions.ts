import { createAction, props } from '@ngrx/store';

export const setMessage = createAction(
  '[Message] Set Message',
  props<{newMessage : string}>()
);




