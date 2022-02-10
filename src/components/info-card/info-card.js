import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";



const InfoCard = ({ lastName, firstName, subscriptionDate }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500], fontSize: 16 }} aria-label="recipe">
            {`${lastName.slice(0, 1)}${firstName.slice(0, 1)}`}
          </Avatar>
        }
        title={`${firstName} ${lastName}`}
        subheader={subscriptionDate}
      />
      <CardMedia
        component="img"
        height="194"
        image="https://cuttingedgepr.com/wp-content/uploads/2017/03/Customer-experience-Shutterstock_579501847.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
