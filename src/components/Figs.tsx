import React, { HtmlHTMLAttributes, useState } from "react";
import rock from "../assets/fig-rock.svg";
import paper from "../assets/fig-note.svg";
import scissors from "../assets/fig-scissors.svg";
import "./Figs.css";

interface Picks {
  activePick: {} | null;
  picks: [{}, {}, {}];
}

export const Figs = (prop?: any) => {
  const [pick, setPick] = useState<Picks>({
    activePick: null,
    picks: [{ id: "rock" }, { id: "paper" }, { id: "scissors" }],
  });

  const toogleActive = (index: any) => {
    setPick({
      ...pick,
      activePick: pick.picks[index],
    });
  };

  // Aprender como tipar un objeto en parametro
  const toogleActiveStyle = (index: any) =>{
    if(pick.picks[index] === pick.activePick){
      console.log(pick.picks[index])
      return "box active"
    } else {
      console.log(pick.picks[index])
      return "box inactive"
    }
  }

  const figures = [rock, paper, scissors];
  const eachFigure = figures.map((fig, index) => {
    return (
      <img
        src={fig}
        className={toogleActiveStyle(index)}
        key={index}
        onClick={() => {
          toogleActive(index);
        }}
      />
    );
  });

  return <div className="figs">{eachFigure}</div>;
};

// Rehacer todo esto no funciona