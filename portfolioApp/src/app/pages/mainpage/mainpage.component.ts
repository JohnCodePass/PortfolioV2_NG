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
    desc: "Recreated Health Force Partners website, starting from a wireframe then prototyping in Adobe Xd, and finally building in Wix using custom JavaScript components. (No repo)",
    git: "https://github.com/JohnCodePass/JokeApi",
    live: "https://www.healthforcepartners.net/",
  },
  {
    title: "QUp App",
    pic: "../../../assets/images/teemoLogin.jpg",
    techUsed: "HTML, CSS, TypeScript, NGBootStrap, SignalR, Angular 11, C#, ASP.NET, Adobe Xd",
    desc: "Full Stack app that allows users to search for other players. App features a real time chat using SignalR, searching players, profile editing and much more. (Repo is Private)",
    git: "https://github.com/JohnCodePass/JokeApi",
    live: "https://qupfullstack.azurewebsites.net/",
  },
  {
    title: "Personal Portfolio",
    pic: "../../../assets/images/pastmoon8bit.png",
    techUsed: "HTML, SCSS, MDBootStrap, TypeScript, Angular 11, Adobe Xd",
    desc: "Personal portfolio, used to hold my projects, skills, about me, resume, and ways to contact me",
    git: "https://github.com/JohnCodePass/PortfolioV2_NG",
    live: "https://jmoralesportfolio.azurewebsites.net/",
  },
  {
    title: "Business Redevelopment",
    pic: "../../../assets/images/SHOP.jpg",
    techUsed: "HTML, CSS, BootStrap, Adobe Xd",
    desc: "Team project, where we had to find a local business, create a prototype and recreate the website",
    git: "https://github.com/JohnCodePass/Project-4-Business-Redevelopment-Project",
    live: "https://poppycoffee-redevelopment-project.azurewebsites.net/",
  },
  {
    title: "Weather App",
    pic: "../../../assets/images/night cloudy.jpg",
    techUsed: "HTML, CSS, JavaScript, BootStrap, OpenWeather API, Adobe Xd",
    desc: "Individual project, where the user enters a city and state to get the current, morning, evening, night time weather, and the 5 day week forecast. User can save cities to local storage. (Repo is private)",
    git: "https://github.com/JohnCodePass/JokeApi",
    live: "https://myweatherapp.azurewebsites.net/",
  },
  {
    title: "Puppy Restaurant",
    pic: "../../../assets/images/cateringHero.jpg",
    techUsed: "HTML, CSS, BootStrap, Adobe Xd",
    desc: "Team project, where we were given a prototype as a reference to create a website",
    git: "https://github.com/JohnCodePass/Project3-PuppyRestaurant",
    live: "https://restaurantbypuppies.azurewebsites.net/",
  },
  {
    title: "Hamster Hotel",
    pic: "../../../assets/images/hamsterhomejpg.jpg",
    techUsed: "HTML, CSS, BootStrap, Adobe Xd",
    desc: "Individual project, where we were given a prototype as reference to create a website",
    git: "https://github.com/JohnCodePass/hamsterHotel",
    live: "https://hamsterhotelproject.azurewebsites.net/",
  },
];

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  menuItems: any = [];
  dayToggle = true;
  getnewHours = 9;
  dateVar: Date = new Date();
  getHours = this.dateVar.getHours();
  constructor() { }

  // ng build --prod to get ready on Azure
  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    // let dateVar: Date = new Date();
    // let this.getHours = dateVar.this.getHours();
    // let this.getHours = 1;
    let theHomeArea = document.getElementById('homeArea')
    if ((this.getHours >= 22) && (this.getHours < 24)) {
      // 10pm to 1am
      theHomeArea!.style.background = "url('../../../assets/images/setandmoon8bit.png') no-repeat center fixed";
      theHomeArea!.style.backgroundSize = "100% 100%";
      this.dayToggle = false
    }
    if ((this.getHours >= 24) || (this.getHours < 1)) {
      // 12am to 1am
      theHomeArea!.style.background = "url('../../../assets/images/moonup8bit.png') no-repeat center fixed";
      theHomeArea!.style.backgroundSize = "100% 100%";
      this.dayToggle = false
    }
    if ((this.getHours >= 2) && (this.getHours < 6)) {
      // 2am to 5am
      theHomeArea!.style.background = "url('../../../assets/images/pastmoon8bit.png') no-repeat center fixed";
      theHomeArea!.style.backgroundSize = "100% 100%";
      this.dayToggle = false
    }
    if ((this.getHours >= 5) && (this.getHours < 7)) {
      // 5am to 6am
      theHomeArea!.style.background = "url('../../../assets/images/sunrise8bit.png') no-repeat center fixed";
      theHomeArea!.style.backgroundSize = "100% 100%";
      this.dayToggle = false;
    }
    if ((this.getHours >= 7) && (this.getHours < 9)) {
      // 7am to 8am
      theHomeArea!.style.background = "url('../../../assets/images/morning8bit.png') no-repeat center fixed";
      theHomeArea!.style.backgroundSize = "100% 100%";
      this.dayToggle = true;
    }
    if ((this.getHours >= 8) && (this.getHours < 11)) {
      // 8am to 10am
      theHomeArea!.style.background = "url('../../../assets/images/highermorning8bit.png') no-repeat center fixed";
      theHomeArea!.style.backgroundSize = "100% 100%";
      this.dayToggle = true;
    }
    if ((this.getHours >= 11) && (this.getHours < 14)) {
      // 11pm to 1pm
      theHomeArea!.style.background = "url('../../../assets/images/noon8bit.png') no-repeat center fixed";
      theHomeArea!.style.backgroundSize = "100% 100%";
      this.dayToggle = true;
    }
    if ((this.getHours >= 14) && (this.getHours < 17)) {
      // 2pm to 4pm
      theHomeArea!.style.background = "url('../../../assets/images/pastnoon8bit.png') no-repeat center fixed";
      theHomeArea!.style.backgroundSize = "100% 100%";
      this.dayToggle = true;
    }
    if ((this.getHours >= 17) && (this.getHours < 19)) {
      // 5pm to 6pm
      theHomeArea!.style.background = "url('../../../assets/images/towardsevening8bit.png') no-repeat center fixed";
      theHomeArea!.style.backgroundSize = "100% 100%";
      this.dayToggle = true;
    }
    if ((this.getHours >= 19) && (this.getHours < 21)) {
      // 7pm to 8pm
      theHomeArea!.style.background = "url('../../../assets/images/nearsunset8bit.png') no-repeat center fixed";
      theHomeArea!.style.backgroundSize = "100% 100%";
      this.dayToggle = false
    }
    if ((this.getHours >= 21) && (this.getHours < 22)) {
      // 9pm to 9pm
      theHomeArea!.style.background = "url('../../../assets/images/sunset8bit.png') no-repeat center fixed";
      theHomeArea!.style.backgroundSize = "100% 100%";
      this.dayToggle = false
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
  

  updateHourValue(valueGot: number) {
    this.getnewHours = valueGot;
    this.getHours = valueGot;
    console.log(this.dayToggle)
    let theHomeArea = document.getElementById('homeArea')
    if ((this.getHours >= 22) && (this.getHours < 24)) {
      // 10pm to 1am
      theHomeArea!.style.background = "url('../../../assets/images/setandmoon8bit.png') no-repeat center fixed";
      theHomeArea!.style.backgroundSize = "100% 100%";
      this.dayToggle = false
    }
    if ((this.getHours >= 24) || (this.getHours < 2)) {
      // 12am to 1am
      theHomeArea!.style.background = "url('../../../assets/images/moonup8bit.png') no-repeat center fixed";
      theHomeArea!.style.backgroundSize = "100% 100%";
      this.dayToggle = false
    }
    if ((this.getHours >= 2) && (this.getHours < 6)) {
      // 2am to 5am
      theHomeArea!.style.background = "url('../../../assets/images/pastmoon8bit.png') no-repeat center fixed";
      theHomeArea!.style.backgroundSize = "100% 100%";
      this.dayToggle = false
    }
    if ((this.getHours >= 5) && (this.getHours < 7)) {
      // 5am to 6am
      theHomeArea!.style.background = "url('../../../assets/images/sunrise8bit.png') no-repeat center fixed";
      theHomeArea!.style.backgroundSize = "100% 100%";
      this.dayToggle = false;
    }
    if ((this.getHours >= 7) && (this.getHours < 9)) {
      // 7am to 8am
      theHomeArea!.style.background = "url('../../../assets/images/morning8bit.png') no-repeat center fixed";
      theHomeArea!.style.backgroundSize = "100% 100%";
      this.dayToggle = true;
    }
    if ((this.getHours >= 8) && (this.getHours < 11)) {
      // 8am to 10am
      theHomeArea!.style.background = "url('../../../assets/images/highermorning8bit.png') no-repeat center fixed";
      theHomeArea!.style.backgroundSize = "100% 100%";
      this.dayToggle = true;
    }
    if ((this.getHours >= 11) && (this.getHours < 14)) {
      // 11pm to 1pm
      theHomeArea!.style.background = "url('../../../assets/images/noon8bit.png') no-repeat center fixed";
      theHomeArea!.style.backgroundSize = "100% 100%";
      this.dayToggle = true;
    }
    if ((this.getHours >= 14) && (this.getHours < 17)) {
      // 2pm to 4pm
      theHomeArea!.style.background = "url('../../../assets/images/pastnoon8bit.png') no-repeat center fixed";
      theHomeArea!.style.backgroundSize = "100% 100%";
      this.dayToggle = true;
    }
    if ((this.getHours >= 17) && (this.getHours < 19)) {
      // 5pm to 6pm
      theHomeArea!.style.background = "url('../../../assets/images/towardsevening8bit.png') no-repeat center fixed";
      theHomeArea!.style.backgroundSize = "100% 100%";
      this.dayToggle = true;
    }
    if ((this.getHours >= 19) && (this.getHours < 21)) {
      // 7pm to 8pm
      theHomeArea!.style.background = "url('../../../assets/images/nearsunset8bit.png') no-repeat center fixed";
      theHomeArea!.style.backgroundSize = "100% 100%";
      this.dayToggle = false
    }
    if ((this.getHours >= 21) && (this.getHours < 22)) {
      // 9pm to 9pm
      theHomeArea!.style.background = "url('../../../assets/images/sunset8bit.png') no-repeat center fixed";
      theHomeArea!.style.backgroundSize = "100% 100%";
      this.dayToggle = false
    }
  }
}
