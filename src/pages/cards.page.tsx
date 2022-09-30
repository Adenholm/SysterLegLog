import React from "react";
import CardGrid from "../components/card-grid/CardGrid";
import { useState, useEffect } from "react";
// import "../../App.css";
import Settings from "../components/category-settings/Settings";
import { useRouter } from "next/router";
import SearchBar from "../components/search-bar/SearchBar";
import { trpc } from "../utils/trpc";
import { Card } from "@prisma/client";
import Link from "next/link";

const CardPage = () => {
  const router = useRouter();
  const categoryId = parseInt(String(router.query.category), 10);

  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  const { data: cards } = trpc.cards.useQuery();
  const { data: categories } = trpc.categories.useQuery();
  const [query, setQuery] = useState("");
  useEffect(() => {
    if (cards && categories) {
      if (query.length > 0) {
        setSelectedCards(cards.filter((card) => card.name.includes(query)));
      } else if (!isNaN(categoryId)) {
        const category = categories.find(
          (category) => category.id === categoryId
        );
        if (category) {
          setSelectedCards(
            cards.filter((card) => card.categoryId === category.id)
          );
        } else {
          setSelectedCards([]);
        }
      } else {
        setSelectedCards(cards);
      }
    }
  }, [cards, categories, query]);
  const [settingsIsOpen, setSettingsIsOpen] = useState(false);
  const [cardsize, setCardsize] = useState(1);

  if (cards !== undefined && categories !== undefined) {
    const categoryName =
      categories.find((category) => category.id === categoryId)?.name ||
      "Alla kategorier";
    return (
      <div>
        <div
          className="flexiblePage"
          style={{ marginRight: settingsIsOpen ? "250px" : "0px" }}
        >
          <Link href="/categories">
            <img src="/icons/back.png" className="previousIcon" />
          </Link>
          <img
            onClick={() => setSettingsIsOpen(!settingsIsOpen)}
            src="/icons/settings.png"
            className="settingsIcon"
            style={{
              marginRight: settingsIsOpen ? "260px" : "0px",
              transition: "0.5s ease",
            }}
          />
          <h1>{categoryName}</h1>
          <div className="row">
            <div className="col-sm-12 text-center">
              <div className="container">
                <SearchBar
                  query={query}
                  onChange={(p) => {
                    setQuery(p);
                  }}
                />
                <CardGrid cards={selectedCards} cardsize={cardsize} />
              </div>
            </div>
          </div>
        </div>
        {/* <Settings
        cardsize={cardsize}
        setCardsize={setCardsize}
        settingsIsOpen={settingsIsOpen}
      /> */}
      </div>
    );
  }

  return <div>Loading...</div>;
};

export default CardPage;
