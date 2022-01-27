import { createCountString } from "../utils.js";

const test = QUnit.test;

test('should return a string describing the current state', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `You have changed hero 4 times, planets 5 times, and heros 1 times`

    //Act
    // Call the function you're testing and set the result to a const
    const actual = createCountString(4, 5, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
