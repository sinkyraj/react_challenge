import { createContext } from 'react'

const ItemContext = createContext({
text: '',
items: [],
handleInputChange: () => { },
handleAddItem: () => { }

})

export default ItemContext