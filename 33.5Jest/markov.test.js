const { MarkovMachine } = require("./markov");

describe("MarkovMachine", () => {
  test("parses input text correctly", () => {
    let mm = new MarkovMachine("the cat in the hat");
    expect(mm.words).toEqual(["the", "cat", "in", "the", "hat"]);
  });

  test("creates correct chains", () => {
    let mm = new MarkovMachine("the cat in the hat");
    expect(mm.chains).toEqual({
      the: ["cat", "hat"],
      cat: ["in"],
      in: ["the"],
      hat: [null],
    });
  });

  test("generates text with correct number of words", () => {
    let mm = new MarkovMachine("the cat in the hat");
    let text = mm.makeText(10);
    expect(text.split(" ").length).toBeLessThanOrEqual(10);
  });

  test("generated words exist in the input", () => {
    let mm = new MarkovMachine("the cat in the hat");
    let text = mm.makeText(20);
    let words = text.split(" ");
    for (let word of words) {
      expect(mm.words).toContain(word);
    }
  });

  test("handles empty string input", () => {
    let mm = new MarkovMachine("");
    let text = mm.makeText();
    expect(text).toEqual("");
  });

  test("handles single word input", () => {
    let mm = new MarkovMachine("hello");
    let text = mm.makeText(5);
    expect(text).toEqual("hello hello hello hello hello");
  });

  test("ensures variability in output", () => {
    let mm = new MarkovMachine("the cat in the hat");
    let output1 = mm.makeText();
    let output2 = mm.makeText();
    expect(output1).not.toEqual(output2); // Randomness check
  });
});