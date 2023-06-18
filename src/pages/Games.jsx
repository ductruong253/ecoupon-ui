import GamesList from "../components/GamesList";
import { useLoaderData, Outlet } from "react-router-dom";

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

export function gamesLoader() {
  const games = [
    {
      id: 1,
      title: "game 1",
      coupons: [
        { id: 2, code: "COUPON2" },
        { id: 3, code: "COUPON3" },
        { id: 4, code: "COUPON4" },
        { id: 5, code: "COUPON5" },
      ],
    },
  ];
  return games;
}
