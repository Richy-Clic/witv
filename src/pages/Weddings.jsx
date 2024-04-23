import WeddingsList from "../components/WeddingsList.jsx";
import { Grid, Box, Button } from "@mui/material";
import Navbar from "../components/Navbar.jsx";
import Modal from "../components/AlertConfirm.jsx";
import { Link } from "react-router-dom";

const Weddings = () => {
  return (
    <Grid container spacing={1}>
      <Navbar />
      <Grid container item justifyContent="flex-end">
      <Link to="/createwedding">
        <Button variant="contained" color="success">
          Nueva Boda
        </Button>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ p: 2 }}>
          <WeddingsList />
        </Box>
      </Grid>
      <Modal/>
    </Grid>
  );
};

export default Weddings;