export const format = (rawTime) => {
    const date = rawTime.split('T')[0]
    let time = rawTime.split('T')[1]
    time = time.split(':')[0] + `:` + time.split(':')[1]
    const nowTime = date + ` ` + time
    return nowTime
}

export default {
    format: format
}