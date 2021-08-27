import { useContext } from 'react'

import { 
  ListGroup, 
  ListGroupItem, Button
} from 'reactstrap';

import ItemContext from '../../Utils/ItemContext'
// import Item from '../../Utils/ItemAPI'

const List = () => {
  const { items } = useContext(ItemContext)

  
  // const deleteItem = (id) => {
  //   Item.delete(id)
  //     .then(() => {
  //       window.location.reload()
  //     })
  //     .catch(err => {
  //       console.error(err)
        
  //     })
  // }

return(
  <>
  
    <ListGroup>
      {

        items.map(item=> <ListGroupItem key = {item._id}>{item.text}</ListGroupItem>)
      }

     </ListGroup>
    <br/>
    {/* <Button color='primary' onClick={() => deleteItem()}>Delete</Button> */}
  </>

)

}

export default List