import React from "react";
import Grid from "@mui/material/Grid";
import CategoryCard from "../components/categories-card/CategoryCard";
import { trpc } from "../utils/trpc";
// import "../Grid.css";

const CategoryPage = () => {
  const { data: categories } = trpc.categories.useQuery();
  if (categories !== undefined) {
    return (
      <div>
        <h1>Kategorier</h1>
        <Grid container className="row">
          <CategoryCard
            id={NaN}
            img="/images/box.jpg"
            title={"Alla kategorier"}
          />
          {categories.map((category) => (
            <CategoryCard
              id={category.id}
              img={category.pic}
              title={category.name}
            />
          ))}
        </Grid>
      </div>
    );
  }

  return <div>Loading...</div>;
};

export default CategoryPage;
