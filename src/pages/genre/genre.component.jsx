import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { getSelectedGenre } from "../../redux/genres/genres.action";
import { getSelectedCategory } from "../../redux/games/games.action";

import Loading from "../../components/common/Loading.component";

import GenreHeader from "../../components/genres/genre-header.component";
import GenreView from "../../components/genres/genre.view.component";

const GenrePage = () => {
  const dispatch = useDispatch();
  const { type, id } = useParams();
  const allCategories = useSelector((state) => state.games.allGames);
  const [categoryTitle, setCategoryTitle] = useState("");

  const [loading, setLoading] = useState(true);

  const setGenres = useCallback(async () => {
    try {
      setLoading(true);
      if (type === "genre") {
        await dispatch(getSelectedGenre(id));
      } else if (type === "category") {
        await dispatch(getSelectedCategory(id));
        for (let i = 0; i < allCategories.length; i++) {
          if (allCategories[i]["id"] === id)
            setCategoryTitle(allCategories[i]["title"]);
        }
      }
    } catch (ex) {
      console.log(ex);
      //tast error
    } finally {
      setLoading(false);
    }
  }, [type, id, allCategories]);

  useEffect(() => {
    setGenres();
  }, [setGenres]);

  return (
    <div>
      <GenreHeader />
      {loading ? (
        <Loading
          type="spinningBubbles"
          color="#3399de"
          height="50px"
          width="50px"
          text="...لطفا منتظر بمانید"
        />
      ) : (
        <GenreView title={categoryTitle} />
      )}
    </div>
  );
};

export default GenrePage;
