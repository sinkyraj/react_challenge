
import axios from 'axios'
const Item = {
getItems: () => axios.get('/api/items'),
addItem: item => axios.post('api/items', item),
updateItem: (id, update) => axios.put(`/api/items/${id}`, update), 
deleteItem: id => axios.delete(`/api/items/${id}`)

}

export default Item