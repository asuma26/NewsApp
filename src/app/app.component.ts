import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service';
import { NgForOf } from '@angular/common';
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-news';
  message="";
  mArticles:Array<any>;
  
 categories=["sports","entertainment","health","science","technology"];
   
   tcode:string;
  
  constructor(private newsapi:NewsApiService ){
    console.log('app component constructor called');    

  }
 ngOnInit(){
 
    //load articles
    this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    
 }
 searchArticlesKeyword(key:string){
  this.newsapi.getArticlesBySearch(key).subscribe(data => this.mArticles = data['articles']);

 
 }
 searchArticles(source){
   console.log("selected source is: "+source);
   
   this.newsapi.getArticlesByCategory(source).subscribe(data => this.mArticles = data['articles']);

 }
searchCall(){
if(this.tcode!==undefined)  
this.searchArticlesKeyword(this.tcode);

}

 }




