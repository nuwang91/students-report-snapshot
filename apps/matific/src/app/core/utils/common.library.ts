export class NuguCommon {
  static tranformDate(date: Date): string {
    const formattedDate = new Date(date).toLocaleDateString('default', {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
    });
    const dateSplit: string[] = formattedDate.split('/');
    return [dateSplit[1], dateSplit[0], dateSplit[2]].join('/');
  }

  static getMonth(date: Date): string {
    return new Date(date).toLocaleString('default', { month: 'short' });
  }

  static getDay(date: Date): string {
    return new Date(date).toLocaleString('default', {day: '2-digit'});
  }

  static getYear(date: Date): string {
    return new Date(date).toLocaleString('default', {year: 'numeric'});
  }

  static getDate(date: string): Date {
    const splitDate = date.split('/');
    const formattedDate = [splitDate[1], splitDate[0], '20' + splitDate[2]].join('/');
    return new Date(formattedDate);
  }

  static getDateWithShortMonth(date: string): string {
    const _date = NuguCommon.getDate(date);
    const day = NuguCommon.getDay(_date);
    const month = NuguCommon.getMonth(_date);
    const year = NuguCommon.getYear(_date);

    return `${day} ${month} ${year}`;
  }
}
