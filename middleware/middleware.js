export default function ({ isServer, req, redirect, route }) {
    const isMobile = (ua) => {
        return !!ua.match(/AppleWebKit.*Mobile.*/)
    }
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent || ''

    // 重定向到pc
    if ((route.fullPath.indexOf('/m')>-1 || route.fullPath.indexOf('/m/')>-1) && !isMobile(userAgent)) {
        const url = route.fullPath.substring(2)
        redirect('/pc' + url)
    }
    // 重定向到移动端
    if ((route.fullPath.indexOf('/m')<0 || route.fullPath.indexOf('/m/')<0) && isMobile(userAgent)) {
        const url = route.fullPath.substring(3)
        redirect('/m' + url)
    }
}