import { useState, useEffect } from 'react'

import Jumbotron from './components/Jumbotron'
import Form from './components/Form'
import List from './components/List'

import { 
  Container, 
  Row, 
  Col 
} from 'reactstrap';

import Item from './Utils/ItemAPI'
import ItemContext from './Utils/ItemContext'

const App = () => {
  const [itemState, setItemState] = useState({
   text: '',
   items: []
})
itemState.handleInputChange =({ target })=>{
  setItemState({ ...itemState, [target.name]: target.value })
}

  itemState.handleAddItem = event => {
    event.preventDefault()
    Item.addItem({
      text: itemState.text,
      isDone: false
    })
      .then(({ data: item }) => {
        const items = [...itemState.items]
        items.push(item)
        setItemState({ ...itemState, items, text: '' })
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    Item.getItems()
      .then(({ data: items }) => setItemState({ ...itemState, items }))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
    <Container>
      <Row>
        <Col xs='12'>
    <Jumbotron />
          </Col>
      </Row>
        <Row>
          <ItemContext.Provider value = {itemState}>
          <Col xs='6'>
           <Form />
          </Col>
          <Col xs='6'>
            
         <List />
          </Col>
          </ItemContext.Provider>
        </Row>
  </Container>
    
    </>
  );
}

export default App;
