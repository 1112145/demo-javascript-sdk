const sdkInfo = require('../package.json');

export default class GoPlaySDK {
    version = sdkInfo.version;
    settings = {
        gameId: '',
        currentUser: {}
    }

    constructor(gameId = '', currentUser = {}) {
        this.settings.gameId = gameId;
        this.settings.currentUser = currentUser;
    }

    getVersion()  {
        return this.version;
    }

    setGameID(gameId) {
        this.settings.gameID = gameId;
    }

    setCurrentUser(userInfo) {
        this.settings.currentUser = userInfo;
    }
}

window.GoPlaySDK = GoPlaySDK;