import GamesList from "../components/GamesList";
import { useLoaderData, Outlet } from "react-router-dom";
import { getAuthToken } from "../utils/auth";

function GamePage() {
  const games = useLoaderData();
  return (
    <>
      <Outlet></Outlet>
      <GamesList games={games} />
    </>
  );
}

export default GamePage;

export async function gamesLoader() {
  const token = getAuthToken();
  const response = await fetch("http://localhost:8083/games", {
    method: "GET",
    credentials: "include",
    headers: {
      Authorization: "Bearer " + token,
      "Access-Control-Allow-Credentials": true,
    },
  });
  const resData = await response.json();
  console.log(resData.games);
  return resData.games;
}
