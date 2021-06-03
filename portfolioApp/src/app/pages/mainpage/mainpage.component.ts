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
    let dateVar: Date = new Date();
    let getHours = dateVar.getHours();
    // let getHours = 5;
    console.log(getHours);
    let theHomeArea = document.getElementById('homeArea')
    if((getHours >= 22) && (getHours < 24)){
      // 10pm to 1am
      theHomeArea!.style.background = "url('../../../assets/images/setandmoon8bit.png') no-repeat center fixed";
      theHomeArea!.style.backgroundSize = "100% 100%";
    }
    if((getHours >= 24) || (getHours < 2)){
      // 12am to 1am
      theHomeArea!.style.background = "url('../../../assets/images/moonup8bit.png') no-repeat center fixed";
      theHomeArea!.style.backgroundSize = "100% 100%";
    }
    if((getHours >= 2) && (getHours < 6)){
      // 2am to 5am
      theHomeArea!.style.background = "url('../../../assets/images/pastmoon8bit.png') no-repeat center fixed";
      theHomeArea!.style.backgroundSize = "100% 100%";
    }
    if((getHours >= 5) && (getHours < 7)){
      // 5am to 6am
      theHomeArea!.style.background = "url('../../../assets/images/sunrise8bit.png') no-repeat center fixed";
      theHomeArea!.style.backgroundSize = "100% 100%";
    }
    if((getHours >= 7) && (getHours < 9)){
      // 7am to 8am
      theHomeArea!.style.background = "url('../../../assets/images/morning8bit.png') no-repeat center fixed";
      theHomeArea!.style.backgroundSize = "100% 100%";
    }
    if((getHours >= 8) && (getHours < 11)){
      // 8am to 10am
      theHomeArea!.style.background = "url('../../../assets/images/highermorning8bit.png') no-repeat center fixed";
      theHomeArea!.style.backgroundSize = "100% 100%";
    }
    if((getHours >= 11) && (getHours < 14)){
      // 11pm to 1pm
      theHomeArea!.style.background = "url('../../../assets/images/noon8bit.png') no-repeat center fixed";
      theHomeArea!.style.backgroundSize = "100% 100%";
    }
    if((getHours >= 14) && (getHours < 17)){
      // 2pm to 4pm
      theHomeArea!.style.background = "url('../../../assets/images/pastnoon8bit.png') no-repeat center fixed";
      theHomeArea!.style.backgroundSize = "100% 100%";
    }
    if((getHours >= 17) && (getHours < 19)){
      // 5pm to 6pm
      theHomeArea!.style.background = "url('../../../assets/images/towardsevening8bit.png') no-repeat center fixed";
      theHomeArea!.style.backgroundSize = "100% 100%";
    }
    if((getHours >= 19) && (getHours < 21)){
      // 7pm to 8pm
      theHomeArea!.style.background = "url('../../../assets/images/nearsunset8bit.png') no-repeat center fixed";
      theHomeArea!.style.backgroundSize = "100% 100%";
    }
    if((getHours >= 21) && (getHours < 22)){
      // 9pm to 8pm
      theHomeArea!.style.background = "url('../../../assets/images/sunset8bit.png') no-repeat center fixed";
      theHomeArea!.style.backgroundSize = "100% 100%";
    }
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
