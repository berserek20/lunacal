import { useReducer } from "react";
import withCard from "../card/withCard";
import IntroCardHead from "./IntroCardHead";
import IntroCardContent from "./IntroCardContent";
import { IntroCardContext } from "./context/IntroCardContext";
import IntroReducer from "./IntroReducer";

function IntroCard() {
  const initialstate = {
    AboutContent:
      "Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...",
    ExperienceContent: "it is Experience",
    RecomendedContent: "it is recomended",
    selectedId: "About",
    selected:
      "Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...",
  };
  const IntroCardTheme = {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItem: "center",
  };
  const [state, dispatch] = useReducer(IntroReducer, initialstate);
  return (
    <div style={IntroCardTheme}>
      <IntroCardContext.Provider value={{ state, dispatch }}>
        <IntroCardHead />
        <IntroCardContent />
      </IntroCardContext.Provider>
    </div>
  );
}

export default withCard(IntroCard);
