import { useCallback, useState, useRef } from 'react';
import './App.css';

const ListItem = ({ item }) => {
  // console.log(`Rendering item: ${item}`);
  return <li>{item}</li>;
};

function App() {
  const items = ['apple', 'banana', 'orange', 'grape', 'pineapple', 'mango'];
  const [name, setName] = useState('');
  const [filteredData, setFilteredData] = useState(items);
  const debounceTimer = useRef(null);

  const filter = () => {
    const data = items.filter(item =>
      item.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredData(data);
  }

  const debounceExample = (func, delay) => {
    clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      func();
    }, delay);
  };

  const onNameChange = (event) => {
    setName(event.target.value);
    debounceExample(filter, 1000);
  }

  return (
    <div className="App">
      <input type='text' value={name} onChange={onNameChange} />
      <ol>
        {filteredData && filteredData.map(item => (
          <ListItem item={item.toUpperCase()} />
        ))}
      </ol>
    </div>
  );
}

export default App;
