import test from 'ava';

import { countLetters } from './counts';

test('countLetters', async (t) => {
    t.deepEqual(
        countLetters(
            'This is a long string to test that the letter-counting capabilities of the function work'
        ),
        {
            T: 1,
            h: 4,
            i: 8,
            s: 5,
            ' ': 14,
            a: 4,
            l: 3,
            o: 6,
            n: 6,
            g: 3,
            t: 13,
            r: 3,
            e: 6,
            '-': 1,
            c: 3,
            u: 2,
            p: 1,
            b: 1,
            f: 2,
            w: 1,
            k: 1,
        }
    );
});
