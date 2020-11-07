import { AfterContentChecked, AfterContentInit, AfterViewChecked, 
  AfterViewInit, DoCheck, ElementRef, EventEmitter, OnChanges, 
  OnDestroy, SimpleChanges, ViewChild } from '@angular/core';
import { Component, Input, OnInit, Output } from "@angular/core";

export interface TopMenu {
  title: string;
  readonly link?: string;
}

@Component({
  selector: "tab-bar",
  inputs: ['menus', 'backgroundColor', 'titleActiveColor', 'indicatorColor', 'titleColor'],
  outputs: ['onSelect'],
  template: `
    <ul [ngStyle]="{'background-color': backgroundColor}">
      <li *ngFor="let menu of menus; let i = index">
        <a href="#" 
          [class.active]="i === selectedIndex"
          [ngStyle]="{color: i === selectedIndex ? titleActiveColor: titleColor}"
          (click)="handleSelection(i)">
        {{ menu.title }}
        </a>
        <span class="indicator" *ngIf="i === selectedIndex else elseTemp"
          [ngStyle]="{'background-color': indicatorColor}">
        </span>
        <ng-template #elseTemp>
          <span></span>
        </ng-template>
      </li>
    </ul>
    <ng-content></ng-content>
  `,
  styleUrls: ['tab-bar.component.css']
})
export class TabBarComponent implements OnInit,OnChanges,DoCheck,
  AfterContentInit,AfterContentChecked, AfterViewInit,AfterViewChecked,
  OnDestroy {
  menus: TopMenu[];
  backgroundColor: string = 'red';
  titleActiveColor: string = "yellow"
  titleColor: string = "blue";
  indicatorColor: string;

  onSelect: EventEmitter<TopMenu> = new EventEmitter();

  selectedIndex: number;

  constructor() { }

  ngOnInit(): void {
    this.selectedIndex = -1;
    console.log('ng on init');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ng on changes');    
  }
  ngDoCheck(): void {
    console.log('ng do check');
  }
  ngAfterContentInit() {
    console.log('ng after content init');
  }
  ngAfterContentChecked(): void {
    console.log('ng after content checked');
  }
  ngAfterViewInit(): void {
    console.log('ng after view init');
  }
  ngAfterViewChecked(): void {
    console.log('ng after view checked');    
  }
  ngOnDestroy(): void {
    console.log('ng on destroy');
  }
  handleSelection(index: number) {
    this.selectedIndex = index;
    this.onSelect.emit(this.menus[this.selectedIndex]);
  }
}
