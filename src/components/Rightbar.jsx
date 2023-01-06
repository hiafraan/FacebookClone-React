import { Box, List, Typography } from "@mui/material";
import React from "react";
import Contact from "./Contact";

const Rightbar = () => {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 300,
        display: { xs: "none", md: "block" },
      }}
    >
      <Box position="fixed">
        <Typography sx={{ mt: 3, mb: 2 }} variant="h6">
          Contacts
        </Typography>
        <Contact
          alt={"John"}
          src={
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
        <Contact
          alt={"Rachel"}
          src={
            "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
        <Contact
          alt={"Lauren"}
          src={
            "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
        <Contact
          alt={"James"}
          src={
            "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
        />
        <Contact src={""} alt={"Emily"} />
        <Contact
          src={
            "https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          alt={"Taylor"}
        />
        <Contact src={""} alt={"Sarah"} />
        <Contact
          src={
            "https://images.pexels.com/photos/356147/pexels-photo-356147.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          alt={"David"}
        />
        <Contact src={""} alt={"Jessica"} />
        <Contact
          src={
            "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          alt={"Michael"}
        />
      </Box>
    </List>
  );
};

export default Rightbar;
