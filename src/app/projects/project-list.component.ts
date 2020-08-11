import { Component, OnInit } from '@angular/core';
import { IProject } from './IProject';
import {filter} from 'rxjs/operators';
import {ProjectService} from './project.service';

@Component({
  selector: 'pm-projects',
  templateUrl: './project-list.component.html'
})

export class ProjectListComponent implements OnInit {
  pageTitle = 'Project List';
  showId = false;
  filteredProjects: IProject[];

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProjects = this.listFilter && this.listFilter !== '' ? this.performFilter(this.listFilter) : this.projects;
  }
  projects: IProject[] = [];

  constructor(private projectService: ProjectService) {
  }

  toogleId(): void {
    this.showId = !this.showId;
  }

  private performFilter(filterBy: string): IProject[] {
    filterBy = filterBy.toLowerCase();
    return this.projects.filter(
      (project: IProject) => project.Name.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
    this.filteredProjects = this.projects;
    this._listFilter = '';
  }
}
