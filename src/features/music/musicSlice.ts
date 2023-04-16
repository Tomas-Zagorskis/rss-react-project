import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Music } from 'types/types';

type MusicListState = {
  musicList: Music[];
};

const initialState: MusicListState = {
  musicList: [],
};

const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    setMusic: (state, action: PayloadAction<Music>) => {
      state.musicList.push(action.payload);
    },
  },
});

export const { setMusic } = musicSlice.actions;
export default musicSlice.reducer;
