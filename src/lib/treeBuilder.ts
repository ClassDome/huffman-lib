import { TreeConnectionType, TreeNode } from '../types/TreeNode';

export function letterCountsToTreeNodes(
    letterCounts: Record<string, number>
): TreeNode[] {
    const nodes: TreeNode[] = [];

    for (const letter in letterCounts) {
        const count = letterCounts[letter];

        nodes.push({
            letter,
            count,
        });
    }

    return nodes;
}

export function sortTree(nodes: TreeNode[]): TreeNode[] {
    return nodes.sort((a, b) => {
        return a.count - b.count;
    });
}

export function compressTree(nodes: TreeNode[]): TreeNode[] {
    if (nodes.length <= 1) {
        return nodes;
    }

    const a = nodes.pop();
    const b = nodes.pop();

    const newLen = nodes.push({
        count: a.count + b.count,
        p_children: a,
        n_children: b,
    });

    nodes[newLen - 1].p_children.parent = nodes[newLen - 1];
    nodes[newLen - 1].p_children.parentType = TreeConnectionType.p;

    nodes[newLen - 1].n_children.parent = nodes[newLen - 1];
    nodes[newLen - 1].n_children.parentType = TreeConnectionType.n;

    return nodes;
}
