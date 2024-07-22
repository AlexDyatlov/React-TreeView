export interface TreeNode {
  name: string;
  children?: TreeNode[];
}

export interface TreeState {
  nestedNodes: string[];
}
