<<<<<<< Updated upstream
import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

import icon from "../assets/icon.png";

const TopBar = ({ ContainedButton, ButtonTypography }) => {
  return (
    <>
      <Box
        sx={{
          zIndex: 100,
          fontStyle: "normal",
          fontSize: "20px",
          letterSpacing: "0.025em",
          position: "sticky",
          top: 0,
          backgroundColor: "#fff",
          height: "90px",
          filter: "drop-shadow(11px 14px 17px rgba(37, 56, 92, 0.1))",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          sx={{
            paddingTop: "10px",
            height: "75px",
          }}
        >
          <Stack direction="row">
            <Typography
  sx={{ fontSize: "26px", fontFamily: "Mada", fontWeight: "400", color: "#54d86c" }}
>
  King
</Typography>
<Typography
  sx={{ fontSize: "26px", fontFamily: "Mada", fontWeight: "700", color: "#fc9304" }}
>
  Ticket
           </Typography>

          </Stack>

          <Stack direction="row" spacing={2}>
            <Button
              href="/login"
              sx={{
                borderRadius: "10px",
                width: "100px",
                height: "55px",
                textTransform: "none",
              }}
              color="secondary"
            >
              <ButtonTypography>Entrar</ButtonTypography>
            </Button>
            <ContainedButton
              variant="contained"
              color="primary"
              href="/signup"
            >
              <ButtonTypography>Contrate agora</ButtonTypography>
            </ContainedButton>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default TopBar;
=======
import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

import icon from "../assets/icon.png";

const TopBar = ({ ContainedButton, ButtonTypography }) => {
  return (
    <>
      <Box
        sx={{
          zIndex: 100,
          fontStyle: "normal",
          fontSize: "20px",
          letterSpacing: "0.025em",
          position: "sticky",
          top: 0,
          backgroundColor: "#fff",
          height: "90px",
          filter: "drop-shadow(11px 14px 17px rgba(37, 56, 92, 0.1))",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          sx={{
            paddingTop: "10px",
            height: "75px",
          }}
        >
          <Stack direction="row">
            <Typography
  sx={{ fontSize: "26px", fontFamily: "Mada", fontWeight: "400", color: "#54d86c" }}
>
  King
</Typography>
<Typography
  sx={{ fontSize: "26px", fontFamily: "Mada", fontWeight: "700", color: "#fc9304" }}
>
  Ticket
           </Typography>

          </Stack>

          <Stack direction="row" spacing={2}>
            <Button
              href="/login"
              sx={{
                borderRadius: "10px",
                width: "100px",
                height: "55px",
                textTransform: "none",
              }}
              color="secondary"
            >
              <ButtonTypography>Entrar</ButtonTypography>
            </Button>
            <ContainedButton
              variant="contained"
              color="primary"
              href="/signup"
            >
              <ButtonTypography>Contrate agora</ButtonTypography>
            </ContainedButton>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default TopBar;
>>>>>>> Stashed changes
