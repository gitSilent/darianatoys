export function addMinutes(date:Date, minutes:number) {
    date.setMinutes(date.getMinutes() + minutes);
  
    return date.toUTCString();
  }