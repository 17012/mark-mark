import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";
import { Box } from "@chakra-ui/react";
import { useState } from "react";

const property = {
  imageUrl: "https://bit.ly/2Z4KKcF",
  imageAlt: "Rear view of modern home with pool",
  beds: 3,
  baths: 2,
  title: "Modern home in city center in the heart of historic Los Angeles",
  formattedPrice: "$1,900.00",
  reviewCount: 34,
  rating: 4,
};

const prices = [1900, 2000, 3000, 5000];

function App() {
  const [hover, setHover] = useState();
  console.log(hover);
  return (
    <div className="App">
      <div
        onMouseOver={() => setHover(undefined)}
        className={`${hover ? "" : "none"}`}
        style={{
          width: "100vw",
          height: "100vh",
          background: "#000",
          opacity: "0.5",
          position: "absolute",
          zIndex: "2",
        }}
      />
      <Box display="flex">
        {prices.map((price) => {
          return (
            <Card
              key={price}
              setHover={setHover}
              property={{
                ...property,
                formattedPrice: `$${price}`,
              }}
              isHover={hover === `$${price}`}
            />
          );
        })}
      </Box>
    </div>
  );
}

export default App;
