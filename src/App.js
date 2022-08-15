import { Costs } from "./components/Costs/Costs";

const App = () => {

  const costs = [
    {
      date: new Date(2022, 3, 4),
      description: "MacBook",
      amount: 1250,
    },
    {
      date: new Date(2022, 12, 12),
      description: "TV",
      amount: 250,
    },
    {
      date: new Date(2022, 1, 4),
      description: "Jeans",
      amount: 150,
    },
  ];

  return (
    <div className="App">
      <Costs costs = {costs}/>
    </div>
  );
}

export default App;
