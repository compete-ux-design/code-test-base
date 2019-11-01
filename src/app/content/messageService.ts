import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class MessageService {
    
    constructor (private http: HttpClient) {}

    private subject = new Subject<any>();
    displayImageStatus$ = new BehaviorSubject<boolean>(false);

    changeDisplayImageStatus(status: boolean){
        this.displayImageStatus$.next(status)
    }

    getDisplayImageStatus(){
        return this.displayImageStatus$.getValue();
    }

    sendMessage(message: string) {
        this.subject.next({ text: message });
    }

    clearMessages() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

    getConfig() {
        // mock
        // return this.http.get('/assets/mocks/nasa-planetary-resp.json');
       
        return this.http.get('https://api.nasa.gov/planetary/apod?api_key=GoaZSnG80hf9Wrhh1cL6h8GzpFAPuZVKm2ipjXOl');
      }
}