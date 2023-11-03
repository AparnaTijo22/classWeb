import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent {
  posts: any;
  constructor(private http:HttpClient) { }


  ngOnInit(): void {
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((data)=>this.displayPost(data))
  }

  displayPost(data:any){
    this.posts = data;
  }

}
