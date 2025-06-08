function getPlatform() {
    const ua = navigator.userAgent.toLowerCase();

    const isTablet = /ipad|tablet|(android(?!.*mobile))/i.test(ua);
    const isMobile = /mobi|android|iphone/i.test(ua);

    if (isTablet) return 'tablet';
    if (isMobile) return 'mobile';
    return 'desktop';
}

const platform = getPlatform();

const baseURL = "https://www.appsheet.com/start/a7157b16-7592-4398-a7ef-7bd9689a7886"
const url = `${baseURL}?platform=${platform}#appName=Qu%E1%BA%A3nl%C3%BDTrungt%C3%A2m-49751858`;
document.getElementById("appIframe").src = url;