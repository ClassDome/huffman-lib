/**
 * This function counts the letters in the input text and returns them as an object
 *
 * @param inputText The input text whose letter's must be counted
 *
 * @returns An object containing the counts for all the letters
 */
export function countLetters(inputText: string): Record<string, number> {
    const letters = inputText.split('');
    const letterCounts: Record<string, number> = {};

    letters.map((letter) => {
        if (!letterCounts[letter]) {
            letterCounts[letter] = 0;
        }

        letterCounts[letter] = letterCounts[letter] + 1;
    });

    return letterCounts;
}
