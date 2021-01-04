import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';
import { referenceValidator } from '../reference.validator';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: Article[];

  articleForm = this.fb.group({
    name: ['', Validators.required],
    reference: ['', referenceValidator]
  })

  constructor(private fb : FormBuilder, private articleService: ArticleService) {   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.articleForm.value);
    this.articleService.addArticle(this.articleForm.value);
    
    this.articles = this.articleService.articles;
  }

}
