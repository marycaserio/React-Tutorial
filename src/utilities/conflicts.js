const parseDays = (days) => {
  let arr = [];
  for (let i = 0; i < days.length; i++) {
    if (days[i] != 'T') {
      arr.push(days[i]);
    }
    else {
      arr.push(days[i].concat(days[i+1]));
      i++
    }
  }
  return arr;
}

const dayOverlap = (daysA, daysB) => parseDays(daysA).some(elem => parseDays(daysB).includes(elem));

const parseTime = (time) => time.replace(":", ".");

const timeOverlap = (timeA, timeB) => {
  let [startA, endA] = parseTime(timeA).split('-');
  let [startB, endB] = parseTime(timeB).split('-');

  return (parseFloat(startA) < parseFloat(endB) && parseFloat(endA) > parseFloat(startB));
}

const parseMeeting = (meeting) => {
  if (meeting === '') {
    return [undefined, undefined];
  }
  else {
    const [days, times] = meeting.split(' ');
    return [days, times];
  }
};

export const overlap = (cards, course) => {
  if (!cards || !course) return [];

  return cards.filter((card) => {
    if ((!card.meets && card.meets === '') || (!course.meets && course.meets === '')) return false;

    const [cardDays, cardTimes] = parseMeeting(card.meets);
    const [courseDays, courseTimes] = parseMeeting(course.meets);

    return (card.term === course.term &&
      dayOverlap(cardDays, courseDays) &&
      timeOverlap(cardTimes, courseTimes));
  });
}