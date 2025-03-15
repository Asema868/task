import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const CharacterDetail = () => {
  const [details, setDetails] = useState({});

  const { characterId } = useParams();
  const navigate = useNavigate();

  const getDetails = async () => {
    try {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/" + characterId
      );
      const data = await response.json();
      console.log("data: ", data);
      setDetails(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  const handlerNavigate = () => {
    navigate("/characters");
  };
  return (
    <div>
      <h1>{details.name}</h1>
      <img src={details.image} alt="" />
      <Button onClick={handlerNavigate} variant="contained">
        {" "}
        GO home
      </Button>
    </div>
  );
};

export default CharacterDetail;
