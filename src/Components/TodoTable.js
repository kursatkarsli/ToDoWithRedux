import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

/*Connect Structure */
import { connect } from "react-redux";
import { removeTodo } from "../Redux/action";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
 
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    width: 350,
    
  },

});

function CustomizedTables(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} >
      <Table className={classes.table}  aria-label="customized table" >
        <TableHead>
          <TableRow>
            <StyledTableCell>Todo List</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.itemList.map((item, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                <div className="items">
                  {item} <button onClick={() => props.removeTodo(i)}>X</button>
                </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const mapStateToProps = (state) => ({
  itemList: state.todoList,
});
const mapStateToDispatch = (dispatch) => ({
  removeTodo: (id) => {
    dispatch(removeTodo(id));
  },
});

export default connect(mapStateToProps, mapStateToDispatch)(CustomizedTables);
