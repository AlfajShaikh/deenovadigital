import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-0NEDF6YVWJ");
  ReactGA.send("pageview");
};