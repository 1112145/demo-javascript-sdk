import { VERSION, CURRENT_USER, OTHER_PLAYERS, START_GAME, CURRENT_SCORE, FINAL_SCORE, ABORT_GAME } from './signal.js';
import { GAME_NOT_STARTED, NO_WEBVIEW_BRIDGE, EMIT_TO_WEBVIEW } from './message.js';

const sdkInfo = require('../package.json');


class GoPlaySDK {
    version = sdkInfo.version;

    otherPlayers = [];
    currentScore = 0;
    finalScore = 0;
    gameStarted = false;


    /**
     * Emit data to native script application via the webview bridge (auto injected to web view)
     * Check: https://github.com/Notalib/nativescript-webview-ext
     * @param {string} signal 
     * @param {*} data 
     */
    emitToNativeScript(signal, data) {

        if (window.nsWebViewBridge) {
            window.nsWebViewBridge.emit(signal, data);
            console.log(EMIT_TO_WEBVIEW, ` signal >>> ${signal}, `, ` data >>> ${data}`);
        } else {
            console.log(NO_WEBVIEW_BRIDGE);
        }
    }

    /**
     * Get sdk version
     */
    getVersion()  {
        this.emitToNativeScript(VERSION, this.version);
        return this.version;
    }

    /**
     * Returns current user’s public info. The current user is the local user that launched the game/platform. 
     * @param {Function} onSuccess 
     * @param {Function} onFailed 
     */
    getCurrentPlayer(onSuccess = null, onFailed = null) {
        if(!this.gameStarted) {
            if (onFailed) {
                onFailed(GAME_NOT_STARTED)
            } 
            return;
        }

        if (onSuccess) {
            this.emitToNativeScript(CURRENT_USER, GoPlaySDK.Settings.currentUser);
            onSuccess(GoPlaySDK.Settings.currentUser);
        }

    }

    /*  Returns array of current user’s opponents. 
        The opponents is the player local user is playing against. Returns null for single-player games.*/
    getOtherPlayers(onSuccess = null, onFailed = null) {
        if(!this.gameStarted) {
            if (onFailed) {
                onFailed(GAME_NOT_STARTED)
            } 
            return;
        }

        if (onSuccess) {
            let data = null;
            if(GoPlaySDK.Settings.gameType !== 'single') {
                data = this.otherPlayers;
            }
            this.emitToNativeScript(OTHER_PLAYERS, data);
            onSuccess(data);
        }

    }

    /* Returns an XML/JSON string with game specific definition data including: 
        - GameType (SinglePlayer, Multiplayer) 
        - CurrentUser
        - OpponentUsers
    */
    getGameConfigInfo(onSuccess = null, onFailed = null) {
        if (!this.gameStarted) {
            if (onFailed) {
                onFailed(GAME_NOT_STARTED);
            }
            return;
        }

        if(onSuccess) {
            onSuccess({
                gameType: GoPlaySDK.Settings.gameType,
                currentUser: GoPlaySDK.Settings.currentUser,
                opponentUsers: this.otherPlayers
            })
        }
    }

    /*  Will be called when an HTML5 game is launched and gameplay is about to begin, 
        this call must be made to the platform indicating a game session has begun. 
        Further gameplay API calls will be ignored until StartGame() has been called. 
        This should also be called on each new round of game play. */
    startGame() {
        this.gameStarted = true;
        this.emitToNativeScript(START_GAME, true);
    }
    /*  Each time the game score changes, call this to report the latest score. 
        This is used to help prevent cheating and to help re-establish lost connections. 
        Available only after StartGame(). */
    updateCurrentScore(score, onSuccess = null, onFailed = null) {
        if(!this.gameStarted) {
            if (onFailed) {
                onFailed(GAME_NOT_STARTED)
            } 
            return;
        }

        this.currentScore = score;
        this.emitToNativeScript(CURRENT_SCORE, this.currentScore);

        if (onSuccess) {
            onSuccess(this.currentScore);
        }


    }

    /*  Called by the client to report the final score earned by the player. 
        Any additional calls to game APIs are ignored with the exception of StartGame(). 
        Available only after StartGame(). */
    updateFinalScore(score, onSuccess = null, onFailed = null) {
        if(!this.gameStarted) {
            if (onFailed) {
                onFailed(GAME_NOT_STARTED);
            } 
            return;
        }

        this.finalScore = score;
        this.emitToNativeScript(FINAL_SCORE, this.finalScore);
        if (onSuccess) {
            onSuccess(this.finalScore);
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

    abortGame(reason, onSuccess = null, onFailed = null) {
        if(!this.gameStarted) {
            if (onFailed) {
                onFailed(GAME_NOT_STARTED)
            } 
            return;
        }
        this.emitToNativeScript(ABORT_GAME, reason);
        if (onSuccess) {
            onSuccess(reason);
        }
    }
}

window.GoPlaySDK = new GoPlaySDK();

window.GoPlaySDK.Settings = {
    gameId: '',
    gameType: '',
    currentUser: {}
}