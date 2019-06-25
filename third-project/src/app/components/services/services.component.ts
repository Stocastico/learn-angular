import { Component, OnInit } from '@angular/core';
import { ServicesService, Servi } from '../../servicios/services.service'

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent implements OnInit {

  services: Servi[]

  constructor(private _services: ServicesService)
  {
    //this.services = ['cane', 'gatto', 'topo', 'scimmia', 'leone', 'tigre', 'ratto', 'cigno', 'ansi']
    // this.services = []
    // this.services.push(new ServicesService('IT', 'C++', 'We develop stuff'))
    // this.services.push(new ServicesService('IT', 'Web dev', 'We do webpages'))
    // this.services.push(new ServicesService('IT', 'SEO', 'We optimize'))
    // this.services.push(new ServicesService('R&D', 'Deep learning', 'We like CNNs'))
    // this.services.push(new ServicesService('R&D', '5G', 'Better than Huawei'))
    // this.services.push(new ServicesService('R&D', 'Automotive', 'Self-driving cars'))
  }

  ngOnInit() {
    this.services = this._services.getServices()
    console.log(this.services)
  }

}
