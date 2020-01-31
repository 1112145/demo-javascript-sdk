
export default class GoPlaySDK {
    version = '0.0.1';

    constructor() {
    }

    getVersion()  {
        return this.version;
    }
}

window.GoPlaySDK = new GoPlaySDK();