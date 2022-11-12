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
}
