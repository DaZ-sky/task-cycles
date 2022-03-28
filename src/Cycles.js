/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
  start+= start%2;
  let sum = 0;
  for(let i=start;i<=end;i+=2){
    sum+=i;
  }
  return sum;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
  let cnt = 0;
  a = parseFloat(a);
  while(true)
  {
    if(a<0.1)
      break;
    a/=2;
    cnt++;
  }
  return cnt;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
  let newLine = "";
  let lineLen = message.length;
  if(lineLen<3)
    return message;
  let cnt = 0;
  do{
    newLine+= cnt%3==2 ? "_" : message[cnt];
    cnt++;
    lineLen--;
  }while(lineLen>0)
  return newLine;
}
