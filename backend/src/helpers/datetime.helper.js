const getDatetimeAsInteger = () => {
    const dt = new Date().toJSON().replaceAll("-", "").replaceAll(":", "").replace("T", "");
    return Number(dt.slice(0, dt.indexOf(".")));
};

module.exports = { getDatetimeAsInteger };