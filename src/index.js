const sdkInfo = require('../package.json');

export default class GoPlaySDK {
    version = sdkInfo.version;
    settings = {
        gameId: '',
        currentUser: {}
    }
    currentScore = 0;
    gameStarted = false;

    constructor(gameId = '', currentUser = {}) {
        this.settings.gameId = gameId;
        this.settings.currentUser = currentUser;
    }

    /* Return the current version of the sdk */
    getVersion()  {
        return this.version;
    }

    /* Returns current user’s public info. The current user is the local user that launched the game/platform. */
    getCurrentPlayer() {
        if(!this.gameStarted) {
            return;
        }
    }

    /*  Returns array of current user’s opponents. 
        The opponents is the player local user is playing against. Returns null for single-player games.*/
    getOtherPlayers() {

    }

    /* Returns an XML/JSON string with game specific definition data including: 
        - GameType (SinglePlayer, Multiplayer) 
        - CurrentUser
        - OpponentUsers
    */
    getGameConfigInfo() {
        if(!this.gameStarted) {
            return;
        }
    }

    /*  Will be called when an HTML5 game is launched and gameplay is about to begin, 
        this call must be made to the platform indicating a game session has begun. 
        Further gameplay API calls will be ignored until StartGame() has been called. 
        This should also be called on each new round of game play. */
    startGame() {
    
    }
    /*  Each time the game score changes, call this to report the latest score. 
        This is used to help prevent cheating and to help re-establish lost connections. 
        Available only after StartGame(). */
    updateCurrentScore(score) {
        if(!this.gameStarted) {
            return;
        }
    }

    /*  Called by the client to report the final score earned by the player. 
        Any additional calls to game APIs are ignored with the exception of StartGame(). 
        Available only after StartGame(). */
    updateFinalScore(score) {
        if(!this.gameStarted) {
            return;
        }
    }

    /*
        Called to end the game session. Aborted games score lower than 0’s in matched games. 
        Used by cheat detection system and for allowing player to abort game session to start over. 
        Game passes reason for aborting game so platform can decide what actions to take. Available only after StartGame().
        reason:
           + TimedOut – game session took too long to complete due to device sleeping, cheating, etc.
           + ShadowVariableMismatch – game detected variable tampering (mismatch with shadow variable)
           + GameException – trapped exception 
    */

    abortGame(reason) {
        if(!this.gameStarted) {
            return;
        }
    }

    setGameID(gameId) {
        this.settings.gameID = gameId;
    }

    setCurrentUser(userInfo) {
        this.settings.currentUser = userInfo;
    }
}

window.GoPlaySDK = GoPlaySDK;