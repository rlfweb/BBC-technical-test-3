// Some first thought re using Jest matchers ...

test("rps", () => {
  expect(playerChoice === "Rock" && computerChoice === "Paper").toBe(
    "Computer wins!"
  );
});
