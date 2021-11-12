import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Badge } from "reactstrap";
import classes from "./ArticleCard.module.css";

const ArticleCard = (props) => {
    return (
        <Card className={classes.ArticleCard}>
            <CardImg
                top
                width="100%"
                src='https://placeimg.com/325/180/any'
                alt="Card image"
                className={classes.CardImage}
            />
            <CardBody className={classes.CardBody}>
                <CardTitle className={classes.CardTitle}>
                            Test Tiitle
                    </CardTitle>


                <CardSubtitle classNam={classes.CardSubtitle}>
                    <Badge className={classes.ArticleLabel}>
                            Topic
                    </Badge>
                </CardSubtitle>
            </CardBody>
        </Card>
    )
}
export default ArticleCard;