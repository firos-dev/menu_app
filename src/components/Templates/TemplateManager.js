import {
  Box,
  Button,
  Grid,
  Paper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { Fragment, useState } from "react";
import classes from "./TemplateManager.module.css";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  height: 350,
  border: "none",
  background: "#fff",
  outline: "none",
  boxShadow: 24,
  borderRadius: 11,
  p: "10px",
  overflow: "hidden",
};

const StyledModal = styled(Modal)(({ theme }) => ({
  fontFamily: "Oswald",
}));

const TemplateManager = (props) => {
  const [open, setOpen] = useState();
  const [meal, setMeal] = useState();

  const StyledBox = styled(Box)(({ theme }) => ({
    background: props.backgroundImage
      ? `url(${props.backgroundImage})`
      : props.backgroundColor,
    textTransform: "uppercase",
  }));

  const handleOpen = (item) => {
    setMeal(item);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const menu = [
    {
      name: "salads",
      description: "GO HEALTHY IN STYLE",
      items: [
        {
          name: "CEASAR SALAD",
          price: "160/200",
          description: "plain or chicken",
        },
      ],
    },
    {
      name: "starters",
      description: "VAMOS MI AMIGOS",
      items: [
        {
          name: "ELOTE",
          price: "110",
          description:
            "Cajun spiced buttered corn with chipotle mayo and cheese",
          image:
            "https://www.mealsonwheels-ottawa.org/wp-content/uploads/2019/10/Picture1.png",
        },
        {
          name: "CAMARONES AL COCO",
          price: "230",
          description:
            "coconut crumbed fried shrimps served with chipotle mayo",
            image: 'https://www.sciencenewsforstudents.org/wp-content/uploads/2020/11/1030_teen_brain_food_choices.jpg'
        },
        {
          name: "chilli bbq wings",
          price: "200",
          description: "fried wings tossed in chilli bbq sauce",
          image: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/restaurant%2F662370%2Frestaurant920191211071538.jpg'
        },
      ],
    },
    {
      name: "salads",
      description: "GO HEALTHY IN STYLE",
      items: [
        {
          name: "CAMARONES AL COCO",
          price: "230",
          description:
            "coconut crumbed fried shrimps served with chipotle mayo",
            image: 'https://www.sciencenewsforstudents.org/wp-content/uploads/2020/11/1030_teen_brain_food_choices.jpg'
        },
      ],
    }, 
    {
      name: "starters",
      description: "VAMOS MI AMIGOS",
      items: [
        {
          name: "ELOTE",
          price: "110",
          description:
            "Cajun spiced buttered corn with chipotle mayo and cheese",
          image:
            "https://www.mealsonwheels-ottawa.org/wp-content/uploads/2019/10/Picture1.png",
        },
        {
          name: "CAMARONES AL COCO",
          price: "230",
          description:
            "coconut crumbed fried shrimps served with chipotle mayo",
            image: 'https://www.sciencenewsforstudents.org/wp-content/uploads/2020/11/1030_teen_brain_food_choices.jpg'
        },
        {
          name: "chilli bbq wings",
          price: "200",
          description: "fried wings tossed in chilli bbq sauce",
          image: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/restaurant%2F662370%2Frestaurant920191211071538.jpg'
        },
      ],
    },
    {
      name: "starters",
      description: "VAMOS MI AMIGOS",
      items: [
        {
          name: "ELOTE",
          price: "110",
          description:
            "Cajun spiced buttered corn with chipotle mayo and cheese",
          image:
            "https://www.mealsonwheels-ottawa.org/wp-content/uploads/2019/10/Picture1.png",
        },
        {
          name: "CAMARONES AL COCO",
          price: "230",
          description:
            "coconut crumbed fried shrimps served with chipotle mayo",
            image: 'https://www.sciencenewsforstudents.org/wp-content/uploads/2020/11/1030_teen_brain_food_choices.jpg'
        },
        {
          name: "chilli bbq wings",
          price: "200",
          description: "fried wings tossed in chilli bbq sauce",
          image: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/restaurant%2F662370%2Frestaurant920191211071538.jpg'
        },
      ],
    },
  ];

  return (
    <Fragment>
      {/* Modal  */}
      {meal && (
        <StyledModal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          {
            <Box sx={style} style={{ background: meal.image }}>
              <Box className={classes.OuterImage}>
                <div
                  style={{ background: `url(${meal.image})` }}
                  className={classes.Image}
                ></div>
              </Box>
              <Grid container>
                <Grid item px={2} py={2} xs={7}>
                  <h2 className={classes.PopHead}>{meal.name}</h2>
                </Grid>
                <Grid item px={2} py={2} xs={5}>
                  <h2 className={classes.PopPrice}>₹ {meal.price}</h2>
                </Grid>
              </Grid>
              <Typography id="transition-modal-description" sx={{ px: 2 }}>
                {meal.description}
              </Typography>
            </Box>
          }
        </StyledModal>
      )}
      {/* Modal close  */}

      <StyledBox container className={classes.Body}>
        <Box item xs={12} sx={{ width: "100%", textAlign: "center" }}>
          <img src={props.logo} className={classes.Logo} alt="Logo" />
        </Box>

        {menu &&
          menu.map((menu) => (
            <Box className={classes.Title} xs={12} sx={{ pb: 2 }}>
              <Box className={classes.Title} xs={12} sx={{ px: 5, pb: 1 }}>
                <h1 className={classes.Head}>{menu.name}</h1>
                <p className={classes.HeadDisc}>{menu.description}</p>
              </Box>
              {menu.items.map((item) => (
                <Box className={classes.Title} xs={12} sx={{ px: 5 }}>
                  <ul>
                    <li
                      className={classes.Item}
                      onClick={() => handleOpen(item)}
                    >
                      <span className={classes.Span}>
                        {item.name}
                        <p>{item.description}</p>
                      </span>
                      <span className={classes.Span + " " + classes.Price}>
                        ₹ {item.price}
                      </span>
                    </li>
                  </ul>
                </Box>
              ))}
            </Box>
          ))}
      </StyledBox>
    </Fragment>
  );
};

export default TemplateManager;
