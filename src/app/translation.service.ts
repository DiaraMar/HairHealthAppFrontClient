import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor() { }

  /*translate(key: string, lang: string): string {
    const translation = translations[key];
    if (translation && translation[lang]) {
      return translation[lang];
    }
    return key; // Retourne la clé si la traduction n'est pas trouvée
  }*/
}
