import type { RootState } from '../store';

export const getUserId = (state: RootState) => state.updateContact.id;
