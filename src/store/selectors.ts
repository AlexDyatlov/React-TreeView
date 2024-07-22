import { RootState } from './store';

export const getNestedNodes = () => (state: RootState) => state.tree.nestedNodes;
