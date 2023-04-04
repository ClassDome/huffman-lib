export enum TreeConnectionType {
    p,
    n,
}

export type TreeNode = {
    parent?: TreeNode | null;
    parentType?: TreeConnectionType | null;
    p_children?: TreeNode | null;
    n_children?: TreeNode | null;
    letter?: string | null;
    count: number;
};
