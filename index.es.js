export function addMinutes(time, minute) {
  const [h, m] = decode(time);
  return encode(h, m + minute)
}

export function addHours(time, hour) {
  const [h, m] = decode(time);
  return encode(h + hour, m)
}

export function encode(hour = 0, minute = 0) {

  if (minute >= 60) {
    hour += Math.floor(minute / 60);
    minute = minute % 60
  }

  if (hour >= 24) hour = hour % 24
  return (hour * 100) + minute
}

export function decode(time) {
  let hour = Math.floor(time / 100)
  let minute = (time % 100);

  if (minute >= 60) {
    hour += Math.floor(minute / 60);
    minute = minute % 60
  }

  if (hour >= 24) hour = hour % 24
  return [hour, minute]
}

export function normalize(time) {
  let hour = Math.floor(time / 100)
  let minute = (time % 100);

  if (minute >= 60) {
    hour += Math.floor(minute / 60);
    minute = minute % 60
  }

  if (hour >= 24) hour = hour % 24
  return (hour * 100) + minute
}

export function isBetween(value, timeLeft, timeRight) {
  let left;
  let right;

  value = normalize(value);

  if (timeLeft > timeRight) {
    left = normalize(timeLeft);
    right = normalize(timeRight) + 2400;
    if (value < timeLeft) value += 2400;

  } else {
    left = normalize(timeLeft);
    right = normalize(timeRight);
  }

  return value >= left && value <= right;
}
