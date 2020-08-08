import { Component } from '@angular/core';

@Component({
  selector: 'pm-projects',
  templateUrl: './project-list.component.html'
})

export class ProjectListComponent {
  pageTitle = 'Project List';
  projects: any[] = [
    {
      Id: 0,
      Name: 'Parallel Example',
      Language: 'Go',
      LastUpdate: '2020-08-08',
      GitHubLink: 'https://github.com/Icedburn/iced-chat',
      Link: 'www.google.com'
    },
    {
      Id: 1,
      Name: 'Test2',
      Language: 'Python',
      LastUpdate: '2020-08-09',
      GitHubLink: 'https://github.com/Icedburn/iced-chat',
      Link: 'www.google2.com'
    }
  ];
}
