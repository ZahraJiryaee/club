import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getAllGames } from "../../redux/games/games.action";

const Games = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGames());
  }, []);

  return (
    <div>
      <h1>Games</h1>
    </div>
  );
};

export default Games;
