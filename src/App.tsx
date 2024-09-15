import DebitCard from "./DebitCard";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <DebitCard
          number="4111111111111111"
          month={2}
          year={22}
          holder="Ulises Castro"
          cvv="456"
        />
      </div>
    </>
  );
}
export default App;
