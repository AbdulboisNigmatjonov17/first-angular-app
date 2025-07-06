import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'text',
  standalone: true
})
export class TextPipe implements PipeTransform {
  transform(value: string, mode: 'uppercase' | 'lowercase' | 'capitalize'): string {
    if (!value) return '';

    switch (mode) {
      case 'uppercase':
        return value.toUpperCase();
      case 'lowercase':
        return value.toLowerCase();
      case 'capitalize':
        return value
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      default:
        return value;
    }
  }
}
