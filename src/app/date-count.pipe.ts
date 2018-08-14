import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today: Date = new Date(); //get current date and time
    let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    var dateDifference = Math.abs(todayWithNoTime - value ); // returns value i miliseconds
    const secondsInADay = 86400; //60 seconds*60 minutes in an hour *24hours

    var dateDifferenceSeconds = dateDifference * 0.001;//converts into seconds

    var dateCounter = dateDifferenceSeconds / secondsInADay;

    if (dateCounter >= 1){
        return dateCounter;
    }else{
        return 0;
    }
  }

}
