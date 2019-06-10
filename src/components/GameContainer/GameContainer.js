import React, { Component } from 'react';
import ImageCard from '../ImageCard';
import images from "../../images.json";
import "./GameContainer.css";

class GameContainer extends Component {
    state = {
        images,
        message: "Click on a bowl of oatmeal to begin",
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
                message: "You already clicked on that one!",
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

    render () { return (
        <div className="container-fluid mainCardContainer">
            <div className="gameMessage text-center">
                <p> {this.state.message} </p>
            </div>

            <div className="gameScores text-center">
                <p> Score: {this.state.score} | High Score: {this.state.highScore} </p>
            </div>
            <div className="container">
                <div className="row">
                    { this.state.images.map(image => (
                        < ImageCard 
                            key = { image.id }
                            id = { image.id }
                            name = { image.name }
                            clicked = { image.clicked }
                            image = { image.image }
                            handleClick = { this.handleClick }
                        />
                    )) }
                </div>
            </div>
        </div>
    )};
};

export default GameContainer;