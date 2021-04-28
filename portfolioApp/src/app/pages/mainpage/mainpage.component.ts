import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  title: string;
  pic: string;
  techUsed: string,
  desc: string;
}
export const ROUTES: RouteInfo[] = [
  {
    title: "Hamster Hotel",
    pic: "../../../assets/images/hamsterhomejpg.jpg",
    techUsed: "HTML, CSS, BootStrap",
    desc: "Individual project, where we were given a prototype as reference to create a website",
  },
  {
    title: "Puppy Restaurant",
    pic: "../../../assets/images/cateringHero.jpg",
    techUsed: "HTML, CSS, BootStrap",
    desc: "Group project of 2, where we were given a prototype as a reference to create a website",
  },
  {
    title: "Business Redevelopment",
    pic: "../../../assets/images/SHOP.jpg",
    techUsed: "HTML, CSS, BootStrap",
    desc: "Group project of 2, where we had to find a local business, create a prototype and recreate the website",
  },

  {
    title: "Weather App",
    pic: "../../../assets/images/night cloudy.jpg",
    techUsed: "HTML, CSS, JavaScript, BootStrap, OpenWeather API",
    desc: "Individual project, where the user enters a city and state to get the current, morning, evening, night time weather, and the 5 day week forecast",
  },
  {
    title: "QUp App",
    pic: "../../../assets/images/teemoLogin.jpg",
    techUsed: "HTML, CSS, TypeScript, RIOT API, NGBootStrap, Angular 11, C#, ASP.NET",
    desc: "Full Stack app that is currently in development with a total group of 3. ",
  },
  {
    title: "Health Force Partners",
    pic: "../../../assets/images/HFPbg.png",
    techUsed: "COMING SOON",
    desc: "COMING SOON",
  },
  
];

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  menuItems: any = [];
  constructor() { }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  topScroll() {
    let mtop = window.document.getElementById('homeArea')!;
    mtop.scrollIntoView({ behavior: 'smooth' });
  }

  aboutScroll() {
    let mAbo = window.document.getElementById('aboutMe')!;
    mAbo.scrollIntoView({ behavior: 'smooth' });
  }

  projectsScroll() {
    let mPro = window.document.getElementById('projectArea')!;
    mPro.scrollIntoView({ behavior: 'smooth' });
  }

}
