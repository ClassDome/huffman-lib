import test from 'ava';

import { TreeConnectionType, TreeNode } from '../types/TreeNode';

import { compressTree, letterCountsToTreeNodes, sortTree } from './treeBuilder';

test('letterCountsToTreeNodes', (t) => {
    t.deepEqual(
        letterCountsToTreeNodes({
            a: 1,
            b: 2,
            c: 3,
        }),
        [
            {
                letter: 'a',
                count: 1,
            },
            {
                letter: 'b',
                count: 2,
            },
            {
                letter: 'c',
                count: 3,
            },
        ]
    );
});

test('sortTree - 1 element', (t) => {
    t.deepEqual(
        sortTree([
            {
                count: 5,
            },
        ]),
        [
            {
                count: 5,
            },
        ]
    );
});

test('sortTree - Multiple elements', (t) => {
    t.deepEqual(
        sortTree([
            {
                count: 15,
            },
            {
                count: 5,
            },
            {
                count: 3,
            },
        ]),
        [
            {
                count: 15,
            },
            {
                count: 5,
            },
            {
                count: 3,
            },
        ]
    );
});

test('compressTree - 0 Elements', (t) => {
    t.deepEqual(compressTree([]), []);
});

test('compressTree - 1 Element', (t) => {
    t.deepEqual(
        compressTree([
            {
                count: 10,
                letter: 'a',
            },
        ]),
        [
            {
                count: 10,
                letter: 'a',
            },
        ]
    );
});

test('compressTree - Multiple Elements', (t) => {
    const expectedTree: TreeNode[] = [
        {
            count: 10,
            letter: 'a',
        },
        {
            count: 8,
            n_children: {
                count: 6,
                letter: 'b',
                parentType: TreeConnectionType.n,
            },
            p_children: {
                count: 2,
                letter: 'c',
                parentType: TreeConnectionType.p,
            },
        },
    ];

    expectedTree[1].n_children.parent = expectedTree[1];
    expectedTree[1].p_children.parent = expectedTree[1];

    t.deepEqual(
        compressTree([
            {
                count: 10,
                letter: 'a',
            },
            {
                count: 6,
                letter: 'b',
            },
            {
                count: 2,
                letter: 'c',
            },
        ]),
        expectedTree
    );
});
