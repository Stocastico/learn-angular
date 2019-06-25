import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

// class Service {
//   header: String
//   title: String
//   desc: String

//   constructor(h: String, t: String, d: String) {
//     this.header = h
//     this.title = t
//     this.desc = d
//   }
// }

export class ServicesComponent implements OnInit {

  services: String[]

  constructor() {
    this.services = ['cane', 'gatto', 'topo', 'scimmia', 'leone', 'tigre', 'ratto', 'cigno', 'ansi']
    // this.services.push(new Service('IT', 'Programming', 'We develop stuff'))
    // this.services.push(new Service('IT', 'Web dev', 'We do webpages'))
    // this.services.push(new Service('IT', 'SEO', 'We optimize'))
    // this.services.push(new Service('R&D', 'Deep learning', 'We like CNNS'))
    // this.services.push(new Service('R&D', '5G', 'Better than Huawei'))
    // this.services.push(new Service('R&D', 'Automotive', 'We self-drive'))
   }

  ngOnInit() {
  }

}
