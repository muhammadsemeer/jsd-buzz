import { makeStyles } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";
import { useEffect, useState } from "react";

const useStyles = makeStyles({
  root: {
    margin: "50px 0 0 0",
    height: "450px",
  },
});

const LeaderBoard = () => {
  const [board, setBoard] = useState();
  const [isLoad, setLoad] = useState(false);
  useEffect(() => {
    axios.get(`/leaderboard`).then(({ data }) => {
      setBoard(data);
      setLoad(true);
    });
  }, []);
  const rows = board?.map((value, index) => ({ id: index, ...value }));
  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 200,
      sortable: false,
      filter: false,
      disableClickEventBubbling: true,
    },
    {
      field: "point",
      headerName: "Score",
      width: 200,
      disableClickEventBubbling: true,
    },
  ];
  const classes = useStyles();
  return isLoad ? (
    <DataGrid
      className={classes.root}
      rows={rows}
      pageSize={5}
      columns={columns}
      rowsPerPageOptions={[5, 10, 20]}
      density="comfortable"
    />
  ) : null;
};

export default LeaderBoard;
