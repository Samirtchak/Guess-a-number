import React from 'react';
import GameStartScreen from '../Screens/GameStartScreen';
import GameScreen from '../Screens/GameScreen';
import GameOverScreen from '../Screens/GameOverScreen';


import renderer from 'react-test-renderer';

describe('Screen tests', () => {

    test(' GameStartScreen render correctly', () => {
        const tree = renderer.create(<GameStartScreen/>).toJSON();
        expect(tree).toMatchSnapshot();
    }); 
    test(' GameScreen render correctly', () => {
        const tree = renderer.create(<GameScreen/>).toJSON();
        expect(tree).toMatchSnapshot();
    }); 
    test(' GameOverScreen render correctly', () => {
        const tree = renderer.create(<GameOverScreen/>).toJSON();
        expect(tree).toMatchSnapshot();
    }); 

})
