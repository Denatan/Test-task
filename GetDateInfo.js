function getDayInfo(time_in)
{
  [dd,mm,yy]=time_in.split('.');//парсим нестандартную времянную строку
  let timeVal=new Date(yy,mm-1,dd);
  dd=timeVal.getDate();    // пересчёт в
  mm=timeVal.getMonth();   // случае ошибочного
  yy=timeVal.getFullYear();// ввода
  let monthsGC=['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];
  let weeksDays=['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
  let weekDayOfFirstDay=(new Date(yy,mm)).getDay();
  let weekNumberInMonth=1+Math.floor((Number(dd)+weekDayOfFirstDay-1)/weeksDays.length);
  return weeksDays[timeVal.getDay()] + ", " + String(weekNumberInMonth) + " неделя " + monthsGC[mm] + " " +yy+" года";
}

function myStrOut()
{
  document.getElementById("dow").innerHTML = getDayInfo2(weekNum.date.value);
//  document.getElementById("dow").innerHTML = 'PROBA';
}