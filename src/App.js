import React,{Component}from 'react';

import Customer from './components/Customer';
import { render } from '@testing-library/react';
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
    return (
    <div>
    {
    customers.map(c=>{
      return (<Customer
        key={c.id}
        id={c.id}
        image={c.image}
        name={c.name}
        sex={c.sex}
        birth={c.birth}
        job={c.job}
        
        />)
    }   
    )
  }  

    </div>)

  }
}

export default App;
