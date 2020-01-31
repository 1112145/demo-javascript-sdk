
export default class GoPlaySDK {
    version = '0.0.1';

    constructor() {
        console.log(this.version)
    }

    getVersion()  {
        return this.version;
    }
}

window.GoPlaySDK = new GoPlaySDK();