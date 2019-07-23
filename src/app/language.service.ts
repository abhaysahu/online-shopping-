import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  select_language = "en";

  

  constructor() { }

  create(language)
  {
    this.select_language=language
  }

  getLanguage()
  {
    return this.select_language
  }
}
 