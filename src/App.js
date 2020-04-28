import React,{Component}from 'react';
import {withStyles} from '@material-ui/core/styles';
import Customer from './components/Customer';
import { render } from '@testing-library/react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';


const styles =theme=>({
  root:{
    width:'100%',
    marginTop :theme.spacing.unit * 3,
    overflowX:"auto"
  },
  table:{
    minWidth:1080
  }
})

const customers=[{
  id:1,
  name:'상윤팍',
  image:'https://placeimg.com/64/64/1',
  birth:'95025',
  sex:'남자',
  job:'백수'
},
{
  id:2,
  name:'김수경',
  image:'https://placeimg.com/64/64/2',
  birth:'95025',
  sex:'여자',
  job:'백수'
},
{
  id:3,
  name:'에레레레',
  image:'https://placeimg.com/64/64/any',
  birth:'9ㅈㄹㅈㄹ5',
  sex:'남자',
  job:'백수'
}]      


class App extends Component {

  render() {
    const {classes}=this.props;
    return (
      <Paper className={classes.root}>
      <Table className={classes.table}>
      <TableHead>
        <TableCell>번호</TableCell>
        <TableCell>이미지</TableCell>
        <TableCell>이름</TableCell>
        <TableCell>생일</TableCell>
        <TableCell>성별</TableCell>
        <TableCell>직업</TableCell>

      </TableHead>
      <TableBody>
    {customers.map(c=>{
      return (<Customer
        key={c.id}
        id={c.id}
        image={c.image}
        name={c.name}
        sex={c.sex}
        birth={c.birth}
        job={c.job}/>)})}  
      </TableBody>
      </Table>
      </Paper>
 )

  }
}

export default withStyles(styles)(App);
