import "./styles/index.css";
import { Navbar } from "./components/navbar";
import MainRouter from "./routes/MainRouter";
import CustomTable from './components/table';

export const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <MainRouter></MainRouter>
      <CustomTable></CustomTable>
    </>
  );
};