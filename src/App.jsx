import PaymentForm from "./components/PaymentForm";
import { Grid, Container } from "@mui/material";
import PlanCard from "./components/planCard";

function App() {
  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <PaymentForm />
        </Grid>
        <Grid item xs={12} md={6}>
          <PlanCard />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
