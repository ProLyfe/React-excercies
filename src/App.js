import Table from './components/Table/Table';
const App = () => {

  const Data = [
    {
      name: 'Yanis',
      job: 'Dev',
      email: 'test@gmail.com',
    },
    {
      name: 'Lorem',
      job: 'Designer',
      email: 'lorem@orange.fr',
    },
    {
      name: 'Ipsum',
      job: 'DevOps',
      email: 'ipsum@free.fr',
    },
    {
      name: 'Delta',
      job: 'Prof',
      email: 'charlie@delta.com',
    },
  ]

  return (
    <div className="App">
        <Table data={Data}/>
    </div>
  );
}

export default App;
