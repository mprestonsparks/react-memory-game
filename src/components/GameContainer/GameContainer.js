import React, { Component } from 'react';
import ImageCard from '../ImageCard';
import images from "../../images.json";
import "./GameContainer.css";

class GameContainer extends Component {
    state = {
        images,
        message: "Click a flag to begin",
        score: 0,
        highScore: 0
    };

    handleClick = (id,clicked) => {
        const imageOrder = this.state.images;

        if (clicked) {
            imageOrder.forEach((image,index) => {
                imageOrder[index].clicked = false;
            });
            return this.setState({
                image: imageOrder.sort(() => Math.random() - 0.5),
                message: "Incorrect, try again",
                score: 0
            });
        } else {
            imageOrder.forEach((image,index) =>  {
                if (id === image.id) {
                    imageOrder[index].clicked = true;
                };
            });
            const { highScore, score } = this.state
            const newScore = score + 1;
            const newHighScore = newScore > highScore ? newScore : highScore;

            return this.setState({
                image: imageOrder.sort(() => Math.random - 0.5),
                message: "Correct!",
                score: newScore,
                highScore: newHighScore
            });
        };
    };

    render () {
        return (
            
        )
    }
}