import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  title: string;
  pic: string;
  techUsed: string,
  desc: string;
  git: string;
  live: string;
}
export const ROUTES: RouteInfo[] = [
  {
    title: "Health Force Partners",
    pic: "../../../assets/images/HFPbg.png",
    techUsed: "Velo by Wix, JavaScript, Adobe Xd",
    desc: "COMING SOON",
    git: "",
    live: "",
  },
  {
    title: "QUp App",
    pic: "../../../assets/images/teemoLogin.jpg",
    techUsed: "HTML, CSS, TypeScript, RIOT API, NGBootStrap, Angular 11, C#, ASP.NET, Adobe Xd",
    desc: "Full Stack app that is currently in development.",
    git: "",
    live: "",
  },
  {
    title: "Business Redevelopment",
    pic: "../../../assets/images/SHOP.jpg",
    techUsed: "HTML, CSS, BootStrap, Adobe Xd",
    desc: "Team project, where we had to find a local business, create a prototype and recreate the website",
    git: "https://github.com/JohnCodePass/Project-4-Business-Redevelopment-Project",
    live: "",
  },
  {
    title: "Weather App",
    pic: "../../../assets/images/night cloudy.jpg",
    techUsed: "HTML, CSS, JavaScript, BootStrap, OpenWeather API, Adobe Xd",
    desc: "Individual project, where the user enters a city and state to get the current, morning, evening, night time weather, and the 5 day week forecast. User can save cities to local storage.",
    git: "",
    live: "",
  },
  {
    title: "Puppy Restaurant",
    pic: "../../../assets/images/cateringHero.jpg",
    techUsed: "HTML, CSS, BootStrap, Adobe Xd",
    desc: "Team project, where we were given a prototype as a reference to create a website",
    git: "",
    live: "",
  },
  {
    title: "Hamster Hotel",
    pic: "../../../assets/images/hamsterhomejpg.jpg",
    techUsed: "HTML, CSS, BootStrap, Adobe Xd",
    desc: "Individual project, where we were given a prototype as reference to create a website",
    git: "",
    live: "",
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
