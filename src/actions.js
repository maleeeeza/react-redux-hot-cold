export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
    type: NEW_GAME,
    correctAnswer: Math.round(Math.random() * 100),
});

export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = (guess) => ({type: MAKE_GUESS, guess});

export const SHOW_INFO_MODAL = 'SHOW_INFO_MODAL';
export const showInfoModal = () => ({type: SHOW_INFO_MODAL});
