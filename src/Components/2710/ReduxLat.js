import React, { useState } from "react";
import styled from "styled-components";
import NavbarRedux from "./sesi1/Components/navbar";
import ProductCard from "./sesi1/Components/product-card";

const StyledProductContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default function ReduxLat() {
  const [selectedItem, setSelectedItem] = useState(0);

  const [products, setProduct] = useState([
    {
      Id: 1,
      stock: 10,
    },
    {
      Id: 2,
      stock: 20,
    },
    {
      Id: 3,
      stock: 30,
    },
  ]);

  const handleBuy = (product) => {
    // setStock((currentStock) => {
    //   return currentStock - 1;
    // });

    // setStock(stock - 1);

    setProduct((currentProducts) => {
      const updatedProducts = currentProducts.map((item) => {
        if (item.Id === product.Id) {
          item.stock -= 1;
          return item;
        }

        return item;
      });

      return updatedProducts;
    });

    setSelectedItem((currentSelectedItem) => {
      return currentSelectedItem + 1;
    });
  };

  const handleRemove = (product) => {
    setProduct((currentProducts) => {
      const updatedProducts = currentProducts.map((item) => {
        if (item.Id === product.Id) {
          item.stock += 1;
          return item;
        }

        return item;
      });

      return updatedProducts;
    });

    setSelectedItem((currentSelectedItem) => {
      return currentSelectedItem - 1;
    });
  };

  return (
    <>
      <NavbarRedux stock={selectedItem} />
      <StyledProductContainer>
        {products.map((product) => {
          return (
            <ProductCard
              key={product.Id}
              stock={product.stock}
              onBuy={() => handleBuy(product)}
              onCancel={() => handleRemove(product)}
            />
          );
        })}

        {/* <ProductCard initial={initialStok}/>
            <ProductCard initial={initialStok}/> */}
      </StyledProductContainer>
    </>
  );
}
