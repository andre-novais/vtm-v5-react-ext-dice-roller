import ReactTooltip from "react-tooltip";

const Die = ({ number, isBloodDie }) => {
  const imageDict = {
    normalDie: {
      1: "normal-fail.png",
      2: "normal-fail.png",
      3: "normal-fail.png",
      4: "normal-fail.png",
      5: "normal-fail.png",
      6: "normal-success.png",
      7: "normal-success.png",
      8: "normal-success.png",
      9: "normal-success.png",
      10: "normal-crit.png",
    },
    bloodDie: {
      1: "bestial-fail.png",
      2: "red-fail.png",
      3: "red-fail.png",
      4: "red-fail.png",
      5: "red-fail.png",
      6: "red-success.png",
      7: "red-success.png",
      8: "red-success.png",
      9: "red-success.png",
      10: "red-crit.png",
    },
  };

  const imageName = imageDict[isBloodDie ? "bloodDie" : "normalDie"][number];

  return (
    <div>
      <img
        data-tip
        src={"diceSides/" + imageName}
        className="dieImage"
        alt="die"
      />
      <ReactTooltip id="dieTip" place="top" effect="solid">
        {number}
      </ReactTooltip>
    </div>
  );
};

export default Die;
