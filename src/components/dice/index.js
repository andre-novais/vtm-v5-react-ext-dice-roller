import Die from "../Die";
import "./style.css";

const Dice = ({ dice }) => {
  let diceComponents = [];
  for (let i = 0; i < dice.length; i++) {
    const number = dice[i].number;
    const isBloodDie = dice[i].isBloodDie;
    diceComponents.push(<Die number={number} isBloodDie={isBloodDie} />);
  }
  return <div>{diceComponents}</div>;
};

export default Dice;
