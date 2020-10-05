import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardIcon from "components/Card/CardIcon.js";
import Danger from "components/Typography/Danger.js";
import Warning from "@material-ui/icons/Warning";

import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={100}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>CEO</h6>
              <h4 className={classes.cardTitle}>Hamirul Hafizal</h4>
              <p className={classes.description}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button color="primary" round>
                Follow
              </Button>
            </CardBody>
          </Card>
        </GridItem>
       <GridItem xs={12} sm={6} md={3}>
  
  <Card style={{ width: "20rem" }}>
    <CardHeader color="success" stats icon>
        <CardIcon color="success">
          <Icon>info_outline</Icon>
        </CardIcon>
        <p className={classes.cardCategory}>Hamirul Hafizal</p>
        <h3 className={classes.cardTitle}>
          RM1,000<small>/g</small>
        </h3>
      </CardHeader>
          <img
            className={classes.cardImgTop}
            data-src="holder.js/100px180/"
            alt="100%x180"
            style={{ height: "300px", width: "100%", display: "block" }}
            src={avatar}
            data-holder-rendered="true"
          />
        {/* <CardBody>
          <h4>Card title</h4>
          <p> </p>
          <Button color="primary">Go somewhere</Button>
        </CardBody> */}
        <center>
          <CardFooter stats>
              <div className={classes.stats}>
                <Button color="danger">Go somewhere</Button>
              </div>
          </CardFooter>
        </center>
    </Card>
      </GridItem>
      <GridItem xs={12} sm={6} md={3}>
  
  <Card style={{ width: "20rem" }}>
    <CardHeader color="success" stats icon>
        <CardIcon color="success">
          <Icon>info_outline</Icon>
        </CardIcon>
        <p className={classes.cardCategory}>Hamirul Hafizal</p>
        <h3 className={classes.cardTitle}>
          RM1,000<small>/g</small>
        </h3>
      </CardHeader>
          <img
            className={classes.cardImgTop}
            data-src="holder.js/100px180/"
            alt="100%x180"
            style={{ height: "300px", width: "100%", display: "block" }}
            src={avatar}
            data-holder-rendered="true"
          />
        {/* <CardBody>
          <h4>Card title</h4>
          <p> </p>
          <Button color="primary">Go somewhere</Button>
        </CardBody> */}
        <center>
          <CardFooter stats>
              <div className={classes.stats}>
                <Button color="danger">Go somewhere</Button>
              </div>
          </CardFooter>
        </center>
    </Card>
      </GridItem>
      <GridItem xs={12} sm={6} md={3}>
  
          <Card style={{ width: "20rem" }}>
            <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Icon>info_outline</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Hamirul Hafizal</p>
                <h3 className={classes.cardTitle}>
                  RM1,000<small>/g</small>
                </h3>
              </CardHeader>
                  <img
                    className={classes.cardImgTop}
                    data-src="holder.js/100px180/"
                    alt="100%x180"
                    style={{ height: "300px", width: "100%", display: "block" }}
                    src={avatar}
                    data-holder-rendered="true"
                  />
                {/* <CardBody>
                  <h4>Card title</h4>
                  <p> </p>
                  <Button color="primary">Go somewhere</Button>
                </CardBody> */}
                <center>
                  <CardFooter stats>
                      <div className={classes.stats}>
                        <Button color="danger">Go somewhere</Button>
                      </div>
                  </CardFooter>
                </center>
            </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={3}>
  
          <Card style={{ width: "20rem" }}>
            <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Icon>info_outline</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Hamirul Hafizal</p>
                <h3 className={classes.cardTitle}>
                  RM1,000<small>/g</small>
                </h3>
              </CardHeader>
                  <img
                    className={classes.cardImgTop}
                    data-src="holder.js/100px180/"
                    alt="100%x180"
                    style={{ height: "300px", width: "100%", display: "block" }}
                    src={avatar}
                    data-holder-rendered="true"
                  />
                {/* <CardBody>
                  <h4>Card title</h4>
                  <p> </p>
                  <Button color="primary">Go somewhere</Button>
                </CardBody> */}
                <center>
                  <CardFooter stats>
                      <div className={classes.stats}>
                        <Button color="danger">Go somewhere</Button>
                      </div>
                  </CardFooter>
                </center>
            </Card>
              </GridItem>
         </GridContainer>
    </div>
  );
}
