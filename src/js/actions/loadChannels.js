import setChannels from "./setChannels";

export default function () {
    return function (dispatch, getState) {
        return new Promise((resolve, reject) => {
            fetch("https://api.gempir.com/channel").then((response) => {
                return response.json();
            }).then((json) => {
                dispatch(setChannels(json.channels));

                resolve();
            }).catch(() => {
                reject();
            });
        });
    };
}
