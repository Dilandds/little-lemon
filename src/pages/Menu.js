import React from "react";
import { MenuList } from "../data/data";
import Layout from "./../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Menu = () => {
  return (
    <Layout>
      <Box sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        bgcolor: "rgba(73, 94, 87, 1)",
      }}>
        {MenuList.map((menu) => (
          <Card sx={{
            maxWidth: "390px",
            display: "flex",
            m: 2,
            boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.25)", // add box shadow
            borderRadius: "10px", // add border radius
          }}>
            <CardActionArea sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}>
              <CardMedia
                sx={{
                  minHeight: "400px",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  gutterBottom
                  component={"div"}
                  sx={{ fontWeight: "bold" }}

                >
                  {menu.name}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "14px" }}> {/* add font size */}
                  {menu.description}
                </Typography>
              </CardContent>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  textAlign: "right",
                  margin: "10px",
                  color: "rgba(244, 206, 20, 1)" // add color
                }}
              >
                {menu.price}
              </Typography>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;