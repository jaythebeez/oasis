import { useState } from 'react';
import './App.css';
import Add from './components/Add';
import View from './components/View';

function App() {

  const [forms, setForms] = useState<FormField[]>([]);

  return (
    <div className="App">
      <main>
        <Add forms={forms} setForms={setForms} /> 
        <View forms={forms} />
      </main>
    </div>
  );
}

export default App;
