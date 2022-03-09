import { Component, OnInit } from '@angular/core';
import { PostResponse } from 'src/app/models/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  
  listPosts!: PostResponse[];
  avatar= localStorage.getItem('avatar');
  nombreUsuario= localStorage.getItem('nombreUsuario')

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(resp =>{
      this.listPosts = resp;
    })
  }

  remPost(id:number){
    this.postService.removePost(id).subscribe();
    alert("Se ha borrado correctamente")
  }
}