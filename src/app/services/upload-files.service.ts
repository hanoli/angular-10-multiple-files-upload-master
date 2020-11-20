import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {

  private baseUrl = 'api/catdescuentosedocta/file';

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    return this.http.post<any>( environment.urlBase + `/upload`,formData);
    /*const req = new HttpRequest('POST', environment.urlBase + `/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);*/
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }
}
