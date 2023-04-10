import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortentextcustompipe'
})
export class ShortentextcustompipePipe implements PipeTransform {

  transform(text: string, maxLength: number): string {
    if (text.length <= maxLength) {
      return text;
    }

    // Split the text into words and remove multiple spaces
    const words = text.split(' ').filter(word => word.length > 0);
    let shortenedText = '';

    for (let i = 0; i < words.length; i++) {
      // Add a space between words (except for the first one)
      if (i > 0) {
        shortenedText += ' ';
      }

      // Add the next word if it fits within the maximum length
      if (shortenedText.length + words[i].length <= maxLength) {
        shortenedText += words[i];
      } else {
        // Otherwise, break the loop and add an ellipsis
        break;
      }
    }

    // Add an ellipsis to the end of the shortened text
    shortenedText += '...';

    return shortenedText;
  }

}
