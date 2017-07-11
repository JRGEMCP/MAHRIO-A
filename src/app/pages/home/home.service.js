import { Injectable } from '@angular/core';

@Injectable()

export class HomeService {
  hacking(){
    return [{
      label: 'Animal Lovers',
      heading: 'Do you seamlessly want to record precious moments?',
      link: ['/']
    },{
      label: 'Commuters',
      heading: 'Just hacks: 11 reasons to collect data',
      link: ['/']
    },{
      label: 'NATIVE AD',
      heading: 'THIS AD IS NATIVE',
      link: ['/']
    },{
      label: 'Habits',
      heading: 'Technology lowers turnover towards breaking a bad habit',
      link: ['/']
    },{
      label: 'Stress Free',
      heading: 'Step away from your smartphone: Technology just in time',
      link: ['/']
    },{
      label: 'Data Collection',
      heading: 'The value proposition of owning data',
      link: ['/']
    }]
  }
}