import {Component, OnInit} from '@angular/core';

declare const particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: 'root.component.html',
  styleUrls: ['root.component.css']
})
export class RootComponent implements OnInit {
  ngOnInit(): void {
    particlesJS.load('particles-js', 'assets/js/particles.json');
  }
}
