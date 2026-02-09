import "./App.css";
import { useGetSeats } from "./hooks/useGetSeats";

function App() {
  const { seatsQuery } = useGetSeats();
  const seats = seatsQuery?.data;
  console.log(seats);
  return (
    <>
      <h1></h1>
    </>
  );
}

export default App;
