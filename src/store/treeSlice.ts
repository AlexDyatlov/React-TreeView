import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TreeState } from '../types/tree.interface';

const initialState: TreeState = {
  nestedNodes: []
};

export const treeSlice = createSlice({
  name: 'tree',
  initialState,
  reducers: {
    toggleNode(state, { payload }: PayloadAction<string>) {
      const nodeName = payload;
      const index = state.nestedNodes.indexOf(nodeName);

      if (index === -1) {
        state.nestedNodes.push(nodeName);
      } else {
        state.nestedNodes.splice(index, 1);
      }
    }
  }
});

export const { toggleNode } = treeSlice.actions;
export const { reducer: treeReducer } = treeSlice;

export default treeReducer;
