import { AppBar, Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

export default function Navbar () {
  return(
    <AppBar>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="a"
          // href="/"
          sx={{
            mr: 2,
            display: 'flex',
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Főoldal
        </Typography>
        <Typography
          variant="h6"
          noWrap
          component="a"
          // href="/"
          sx={{
            mr: 2,
            display: 'flex',
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Második menüpont
        </Typography>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
      </Toolbar>
    </AppBar>
  )
}