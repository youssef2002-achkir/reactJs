import React, {Component} from 'react'
import AddItem from './Components/addItem/addItem';
import TodoItems from './Components/todoItem/todoItem'


//Stateful Component
class App extends Component{
  state = {
    data: [
      {id:1,name:"Youssef", age: 20},
      {id:2,name:"Hamza", age: 21},
      {id:3,name:"Omar", age: 24}
    ]
  }

  deleteItem = (id) => {
    /*let p = this.state.data;
    let i = p.findIndex(item => item.id === id)
    p.splice(i,1);
    this.setState({data:p});*/
    let p = this.state.data.filter(item => {
      return item.id !== id;
    });
    this.setState({data:p});

  }

  addItem = (item =>{
    item.id = Math.random()*10;
    let datas = this.state.data;
    datas.push(item);
    this.setState({
      data : datas
    })
  })
 render(){
    return(
      <div className='App container'>
        <h1 className='text-center'>Todo List</h1>
        <TodoItems items={this.state.data} deleteItem={this.deleteItem}/>
        <AddItem fun={this.addItem} />
      </div>
    )
  }
  
}
export default App;
