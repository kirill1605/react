import "./styles/index.css";
import { Navbar } from "./components/navbar";
import MainRouter from "./routes/MainRouter";
import CustomTable from './components/table';
import { Form } from "./components/pages/form";

export const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <MainRouter></MainRouter>
      <CustomTable></CustomTable>
      <Form></Form>
    </>
  );
};