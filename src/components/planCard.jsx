"use client";

import React, { useState } from "react";
import { Done } from "@mui/icons-material";
import {
  Box,
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

const point = [
  "Distinctio et nulla eum soluta",
  "Distinctio et nulla eum soluta et",
  "Distinctio et nulla eum soluta",
  "Distinctio et nulla eum soluta",
  "Distinctio et nulla eum soluta",
];
const PlanCard = () => {
  return (
    <>
      <Box
        sx={{
          py: 4,
          background: "var(--light-grey)",
          height: "100%",
        }}
      >
        <Box
          sx={{ maxWidth: "26rem", px: 2, margin: "auto", height: "100%" }}
          className="flex align-items-center"
        >
          <Card
            sx={{
              boxShadow: "none",
              borderRadius: "15px",
              //   height: "100%",
              border: "1px solid #ABABAB",
              px: 3.5,
              py: 3.5,
              backgroundColor: "#fff",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#F7F7F7",
                transition: "0.5s ease-in-out",
              },
              "&:hover .MuiButton-root": {
                backgroundColor: "var(--main-color)",
                color: "#fff",
                border: "1px solid var(--main-color)",
              },
            }}
          >
            <Box sx={{ p: 0 }}>
              <Typography variant="h6" component="div" className="fw-500">
                Basic
              </Typography>
              <Typography
                variant="caption"
                className="secondary-color fw-500"
                sx={{ py: 2 }}
              >
                Distinctio et nulla eum soluta et neque labore quibusdAM. Saepe
                et quasi iusto modi velit ut non
              </Typography>

              <Typography
                variant="h5"
                component="div"
                className="fw-500 main-color"
                sx={{ display: "flex", alignItems: "center" }}
              >
                $10
                <Typography
                  variant="subtitle2"
                  className="secondary-color"
                  component="span"
                  sx={{ pl: "5px !iMPORTANT" }}
                >
                  /months
                </Typography>
              </Typography>

              <List sx={{ p: 0, pt: 3 }}>
                {point.map((point, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: "35px" }}>
                      <Done className="main-color" />
                    </ListItemIcon>
                    <ListItemText
                      primary={point}
                      sx={{
                        span: {
                          fontSize: "14px !iMPORTANT",
                          color: "var(--secondary-color) !iMPORTANT)",
                          fontWeight: "500 !iMPORTANT",
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default PlanCard;
