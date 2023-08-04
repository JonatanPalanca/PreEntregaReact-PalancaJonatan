import React, { useEffect, useState } from "react";
import { Box, Text, Grid } from "@chakra-ui/react";
import Item from "./Item";
import { useParams } from "react-router-dom";

const mockItems = [
  {
    id: 1,
    title: "Producto 1",
    description: "Descripción del producto 1",
    price: 50,
    pictureUrl: "https://via.placeholder.com/300",
    category: "Juegos PC",
    categoryId: "1",
    stock: 0,
  },
  {
    id: 2,
    title: "Producto 2",
    description: "Descripción del producto 2",
    price: 30,
    pictureUrl: "https://via.placeholder.com/300",
    category: "Juegos PC",
    categoryId: "1",
    stock: 10,
  },
  {
    id: 3,
    title: "Producto 3",
    description: "Descripción del producto 3",
    price: 20,
    pictureUrl: "https://via.placeholder.com/300",
    category: "Juegos PC",
    categoryId: "1",
    stock: 10,
  },
  {
    id: 4,
    title: "Producto 4",
    description: "Descripción del producto 4",
    price: 70,
    pictureUrl: "https://via.placeholder.com/300",
    category: "Juegos PS5",
    categoryId: "2",
    stock: 10,
  },
  {
    id: 5,
    title: "Producto 5",
    description: "Descripción del producto 5",
    price: 40,
    pictureUrl: "https://via.placeholder.com/300",
    category: "Juegos PS5",
    categoryId: "2",
    stock: 10,
  },
  {
    id: 6,
    title: "Producto 6",
    description: "Descripción del producto 6",
    price: 25,
    pictureUrl: "https://via.placeholder.com/300",
    category: "Juegos PS5",
    categoryId: "2",
    stock: 10,
  },
  {
    id: 7,
    title: "Producto 7",
    description: "Descripción del producto 7",
    price: 50,
    pictureUrl: "https://via.placeholder.com/300",
    category: "Juegos PS4",
    categoryId: "3",
    stock: 10,
  },
  {
    id: 8,
    title: "Producto 8",
    description: "Descripción del producto 2",
    price: 30,
    pictureUrl: "https://via.placeholder.com/300",
    category: "Juegos PS4",
    categoryId: "3",
    stock: 10,
  },
  {
    id: 9,
    title: "Producto 9",
    description: "Descripción del producto 9",
    price: 20,
    pictureUrl: "https://via.placeholder.com/300",
    category: "Juegos PS4",
    categoryId: "3",
    stock: 10,
  },
  {
    id: 10,
    title: "Producto 10",
    description: "Descripción del producto 10",
    price: 70,
    pictureUrl: "https://via.placeholder.com/300",
    category: "Juegos Xbox",
    categoryId: "4",
    stock: 10,
  },
  {
    id: 11,
    title: "Producto 11",
    description: "Descripción del producto 11",
    price: 40,
    pictureUrl: "https://via.placeholder.com/300",
    category: "Juegos Xbox",
    categoryId: "4",
    stock: 10,
  },
  {
    id: 12,
    title: "Producto 12",
    description: "Descripción del producto 12",
    price: 25,
    pictureUrl: "https://via.placeholder.com/300",
    category: "Juegos Xbox",
    categoryId: "4",
    stock: 10,
  },
];

const ItemListContainer = ({ greeting }) => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Filtrar los elementos por el ID de la categoría si está disponible
    const filteredItems = id
      ? mockItems.filter((item) => item.categoryId === id)
      : mockItems;

    // Simulación de un llamado asincrónico con retraso de 2 segundos
    const fetchItems = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(filteredItems);
        }, 2000);
      });
    };

    fetchItems().then((data) => setItems(data));
  }, [id]);

  return (
    <Box
      p={4}
      bgGradient="linear(to-r, teal.500, purple.600)"
      color="white"
      borderRadius="md"
      boxShadow="md"
    >
      <Text
        fontSize="4xl"
        fontWeight="bold"
        textAlign="center"
        fontFamily="fantasy"
        textShadow="2px 2px 4px rgba(0, 0, 0, 0.4)"
      >
        ¡Bienvenido a Spark Gamer!
      </Text>
      <Text fontSize="2xl" fontWeight="normal" textAlign="center" mt={4}>
        Descubre una amplia selección de juegos digitales de calidad.
      </Text>
      <Grid
        mt={8}
        gap={4}
        templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
      >
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Grid>
    </Box>
  );
};

export default ItemListContainer;
