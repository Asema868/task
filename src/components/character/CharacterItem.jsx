import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const CharacterItem = ({ image, name, gender, status, id }) => {
  const navigate = useNavigate();

  const handlerNavigate = () => {
    navigate(`/characters/${id}`);
  };
  return (
    <Card sx={{ width: 250, cursor: "pointer" }} onClick={handlerNavigate}>
      <CardMedia sx={{ height: 200 }} image={image} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {name}
        </Typography>
        <Typography variant="body2" color={"text.secondary"}>
          Gender: {gender}
        </Typography>
        <Typography variant="body2" color={"text.secondary"}>
          Status: {status}
        </Typography>
        <Typography variant="body2" color={"text.secondary"}>
          Episodes: ???
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CharacterItem;
