
import { useContext } from 'react'

import { Button, 
  Form as Frm, 
  FormGroup, 
  Label, 
  Input } from 'reactstrap';

import ItemContext from '../../Utils/ItemContext'
const Form=()=>{
const {
text, 
handleInputChange,
handleAddItem

} = useContext(ItemContext)

return(
  <>
  {/* <h1>This is Form</h1> */}
  <Frm onSubmit= {handleAddItem}>
      <FormGroup>
        <Label for="text">Item</Label>
        <Input 
        type="text" 
        name="text" 
        // placeholder='Take out trash' 
        value={text}
        onChange={handleInputChange}

        
        />

      </FormGroup>
      <br/>
      <FormGroup>
        <Button color ='primary' onClick={handleAddItem}>Add Item</Button>

      </FormGroup>

  </Frm>
  </>

)

}

export default Form