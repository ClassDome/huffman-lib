import test from 'ava';

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
                count: 3,
            },
            {
                count: 5,
            },
            {
                count: 15,
            },
        ]
    );
});

test('compressTree - Multiple Elements', (t) => {
    console.dir(
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
        ])
    );

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
        [
            {
                count: 10,
                letter: 'a',
            },
        ]
    );
});
