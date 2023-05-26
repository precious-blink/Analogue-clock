
function rotateClock () {
    let secs_hand = document.querySelector('.secs')
    let mins_hand = document.querySelector('.mins')
    let hour_hand = document.querySelector('.hour')
    
    
    let hour = new Date().getHours()
    let mins = new Date().getMinutes()
    let secs = new Date().getSeconds()

    let hourDeg = ( hour % 12 ) * 30  + ( mins / 60) * 30
    let minDeg = (mins / 60) * 360 + (secs / 60) * 6 
    let secsDeg = (secs / 60) * 360
    
    hour_hand.style.transform = `translateX(-50%) translateY(-100%) rotate(${hourDeg}deg)`
    mins_hand.style.transform = `translateX(-50%) translateY(-100%) rotate(${minDeg}deg)`
    secs_hand.style.transform = `translateX(-50%) translateY(-100%) rotate(${secsDeg}deg)`

}

rotateClock()

setInterval(rotateClock, 1000)


