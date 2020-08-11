import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IProject} from './IProject';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  constructor(private http: HttpClient) {}

  getProjects(): IProject[] {
    return [
    {
      Id: 0,
        Name: 'Parallel Example',
      Language: 'Go',
      CreationDate: '2020-08-08',
      LastUpdate: '2020-08-08',
      GitHubLink: 'https://github.com/Icedburn/iced-chat',
      ProjectLink: 'www.google.com'
    },
    {
      Id: 1,
        Name: 'Test3',
      Language: 'Python',
      CreationDate: '2020-07-08',
      LastUpdate: '2020-08-09',
      GitHubLink: 'https://github.com/Icedburn/iced-chat',
      ProjectLink: 'www.google2.com'
    }];
    // return this.http.get<IProject[]>(this.projectUrl);
  }
}
