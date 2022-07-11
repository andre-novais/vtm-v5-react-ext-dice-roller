import { useState } from "react";
import rollDice from "../services/roolDice";
import Dice from "./dice";

const DiceRoller = () => {
  const [dice, setDice] = useState([]);
  const [dicePool, setDicePool] = useState(1);
  const [hunger, setHunger] = useState(0);
  const [sucesses, setSucesses] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const resp = await rollDice({
      dicePool,
      hunger,
    });
    const { successes: rolledSucesses, dice: rolledDice } = resp;

    setDice(rolledDice);
    setSucesses(rolledSucesses);
  };

  const handleDicePoolChange = (event) => {
    if (isNumber(event.target.value)) {
      setDicePool(parseInt(event.target.value));
    }
  };

  const handleHungerChange = (event) => {
    if (isNumber(event.target.value)) {
      setHunger(parseInt(event.target.value));
    }
  };

  const isNumber = (value) => {
    const re = /^[0-9\b]+$/;
    return value !== "" && re.test(value);
  };

  return (
    <div>
      Sucesses: {sucesses}
      <Dice dice={dice} />
      <form onSubmit={handleSubmit}>
        <label>
          Dice Pool:
          <input
            type="text"
            name="dicePool"
            value={dicePool}
            onChange={handleDicePoolChange}
          />
        </label>
        <label>
          Hunger:
          <input
            type="text"
            name="hunger"
            value={hunger}
            onChange={handleHungerChange}
          />
        </label>
        <input type="submit" value="Roll" />
      </form>
    </div>
  );
};

export default DiceRoller;
