import Highlight from "react-highlight";
import "./Exp.css";
import { useContext, useEffect } from "react";
import { statsContext } from "../../contexts/statsContext";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";

const Explanation = ({ explanation, explanationCode }) => {
  useEffect(() => {
    document.querySelector("body").classList.add("no-scroll");
    return () => {
      document.querySelector("body").classList.remove("no-scroll");
    };
  }, []);
  const { exp, showExp } = useContext(statsContext);
  return (
    <Dialog
      open={exp}
      onClose={() => showExp(false)}
      scroll="paper"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Explanation</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {explanationCode !== "" ? <Highlight language="javascript">{explanationCode}</Highlight> : null}
          {explanation}
          {explanation}
          {explanation}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => showExp(false)} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Explanation;
