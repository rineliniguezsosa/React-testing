// import { Aplication } from './componentes/Aplication';
//import { Counter } from './componentes/Counter';
//import { JumboTron } from './componentes/JumboTron';
import { Table } from './componentes/Table';
import { fakeEmployees } from './data/fakeEmployees';
//import { Travel } from './componentes/Travel';


function App() {
  return (
    <div>
      <Table employees={fakeEmployees}></Table>
    </div>
  );
}

export default App;
