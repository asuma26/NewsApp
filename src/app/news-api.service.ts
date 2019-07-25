import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = '8fd2599375b943fcbeaa607aa1654960';

  constructor(private http:HttpClient) { }

 getArticlesBySearch(keyword:string){
   
  return this.http.get('https://newsapi.org/v2/everything?q='+keyword+'&apiKey='+this.api_key);
 }
 initArticles(){
  return this.http.get('https://newsapi.org/v2/top-headlines?country=in&apiKey='+this.api_key);
 }

getArticlesByCategory(category:String){
  return this.http.get("https://newsapi.org/v2/top-headlines?country=in&category="+category+"&apiKey="+this.api_key)
}

}
