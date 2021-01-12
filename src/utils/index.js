import { format } from 'date-fns';

/* eslint-disable-next-line */
export function dateToString(date){
  if (!date) { return ''; }
  return format(date, 'yyyy/MM/dd HH:mm');
}
