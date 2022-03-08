import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PostResponse } from '../models/interfaces/post.interface';

const POST_BASE_URL = '/post';
const DEFAULT_HEADERS = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`})
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  authBaseUrl= `${environment.apiBaseUrl}${POST_BASE_URL}`;

  constructor(private http: HttpClient) { }

  getPosts(): Observable<PostResponse[]>{
    let requestUrl =  `${this.authBaseUrl}/public`;
    return this.http.get<PostResponse[]>(requestUrl, DEFAULT_HEADERS);
  }
}
