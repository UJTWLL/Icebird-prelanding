import { Grid } from "@mui/material";

export default function PageContent () {
  return(
    <>
      <Grid container>
        <Grid item xs={6}>
          <div>Icebird Algo</div>
          <hr/>
          <div>For You</div>
        </Grid>
        <Grid item xs={6}>LOGÓ</Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6}>KÉP A</Grid>
        <Grid item xs={6}>KÉP B</Grid>
      </Grid>
    </>
  )
}