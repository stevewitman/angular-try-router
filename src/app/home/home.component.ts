import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  bookmarks = [
    { '100': 'http://stevewitman.com/wpfree.html'},
    { 'meetup': 'https://www.meetup.com/angular-boulder/'},
  ]

  ngOnInit() {
    const tryUrl = window.location.href
    const n = tryUrl.lastIndexOf('/')
    const shortUrl = tryUrl.slice(n+1)
    console.log(this.bookmarks)
  }

}
