import { Injectable } from '@angular/core';
import { Article } from './article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  public articles: Article[] = [];

  constructor() { }

  addArticle(article: Article) {
    this.articles.push(article);
  }
}
