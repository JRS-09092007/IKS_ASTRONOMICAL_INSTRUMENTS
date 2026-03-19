// REAL SOLAR CALCULATION (USED BY ALL YANTRAS)

export function getSolarPosition(lat, lon) {
    let now = new Date();
    let rad = Math.PI / 180;

    let day = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);

    let decl = 23.45 * Math.sin(rad * (360 / 365 * (day - 81)));

    let time = now.getHours() + now.getMinutes() / 60;
    let hra = 15 * (time - 12);

    let altitude = Math.asin(
        Math.sin(lat * rad) * Math.sin(decl * rad) +
        Math.cos(lat * rad) * Math.cos(decl * rad) * Math.cos(hra * rad)
    ) / rad;

    let azimuth = Math.acos(
        (Math.sin(decl * rad) - Math.sin(altitude * rad) * Math.sin(lat * rad)) /
        (Math.cos(altitude * rad) * Math.cos(lat * rad))
    ) / rad;

    return { altitude, azimuth };
}