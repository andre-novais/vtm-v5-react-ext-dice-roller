const rollDice = async ({ dicePool, hunger }) => {
  const endpoint = "http://localhost:4000/graphql";
  const headers = {
    "content-type": "application/json",
  };
  const graphqlQuery = {
    query: `query ($dicePool: Int!, $hunger: Int) {
      rollDice(dice: $dicePool, hunger: $hunger) {
        successes
        dice {
            number
            isBloodDie
        }
      }
    }`,
    variables: { dicePool, hunger },
  };

  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(graphqlQuery),
  };

  const response = await fetch(endpoint, options);
  const data = (await response.json())["data"];

  return data.rollDice;
};

export default rollDice;
