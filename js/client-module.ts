// @ts-nocheck
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import {ClientModule} from "@docusaurus/types";
const addDocTitleToPayload = () => {
    const titlePathData = document.querySelectorAll('span.breadcrumbs__link');
    if (titlePathData.length) {
        const titleElement = <HTMLSpanElement>titlePathData[titlePathData.length-1]
        const titleText = titleElement.innerText
        // @ts-ignore
        if (window.ymConfig && window.ymConfig.payload) {
            // @ts-ignore
            window.ymConfig.payload.title = titleText;
            window.ymConfig.payload.pageUrl = window.location.href;

        } else if (window.ymConfig) {
            window.ymConfig.payload = {title: titleText, pageUrl: window.location.href};
        }
    }
    console.log("BOT.JS", window.ymConfig.payload)
    return window.ymConfig.payload;
}
const module: ClientModule = {
    onRouteDidUpdate: ({location, previousLocation}) => {
        // this fires after React renders and can access to updated DOM
        if (ExecutionEnvironment.canUseDOM) {
            const payload = addDocTitleToPayload()

            const myHeaders = new Headers();
            myHeaders.append("content-type", "application/json");

            // const uid = window?.frames?.ymIframe?.chat?.jid;
            const uid = window?.frames?.ymIframe?.chat?.jid?.split('@')[0]
            if (uid) {
                const raw = JSON.stringify({
                    "bot": window.ymConfig.bot,
                    "uid": uid,
                    "referrer": window.ymConfig.bot,
                    "payload": payload,
                    "pageUrl": window.location.href,
                    "source": "yellowmessenger",
                    "isYmAuth": false
                });

                const requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                };

                fetch("https://cloud.yellow.ai/api/plugin/update-user-info?bot=x1687158407670", requestOptions)
                    .then(response => response.text())
                    .then(result => console.log(result))
                    .catch(error => console.log('error', error));
            }
        }
    },
};

export default module;