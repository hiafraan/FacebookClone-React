import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

const Contact = (props) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar alt={props.alt} src={props.src}></Avatar>
      </ListItemAvatar>
      <ListItemText primary={props.alt} />
    </ListItem>
  );
};

export default Contact;
