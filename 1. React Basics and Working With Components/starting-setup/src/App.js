import ExpenseItem from "./components/ExpenseItem"; //importing our custom component

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
      {/* using custom component as HTML tag */}
      {/* look for naming convention as name starts with uppercase for custom components */}
    </div>
  );
}

export default App;
