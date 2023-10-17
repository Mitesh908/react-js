 

export class MiteshComponent implements OnInit {

 

  constructor(private mService: MiteshService) { }

  ngOnInit(): void {

    this.mService.getData().subscribe((res) => {

      this.data = res as Root;

    })

  }

 

  data: Root | null = null;

 

 

  // **********************************************************************

  // group based on user

 

  grpByUser(apiData: any) {

    const apiTicket = apiData as Ticket[];

    console.log(this.groupByUserId(apiTicket));

  }

 

  groupByUserId(data: Ticket[]): { [userId: string]: Ticket[] } {

    const groupedData: { [userId: string]: Ticket[] } = {};

 

    for (const item of data) {

      const userId = item.userId;

 

      if (!groupedData[userId]) {

        groupedData[userId] = [];

      }

 

      groupedData[userId].push(item);

    }

 

    return groupedData;

  }

 

 

  // **********************************************************************

 

  // by status

 

  grpByStatus(apiData: any) {

    const apiTicket = apiData as Ticket[];

    console.log(this.groupByStatus(apiTicket));

  }

 

 

  groupByStatus(data: Ticket[]): { [status: string]: Ticket[] } {

    const groupedData: { [status: string]: Ticket[] } = {};

 

    for (const item of data) {

      const status = item.status;

 

      if (!groupedData[status]) {

        groupedData[status] = [];

      }

 

      groupedData[status].push(item);

    }

 

    return groupedData;

  }

 

 

  // priority

 

  grpByPriority(apiData: any) {

    const apiTicket = apiData as Ticket[];

    console.log(this.groupByPriority(apiTicket));

  }

 

  groupByPriority(data: Ticket[]): { [priority: number]: Ticket[] } {

    const groupedData: { [priority: number]: Ticket[] } = {};

 

    for (const item of data) {

      const priority = item.priority;

 

      if (!groupedData[priority]) {

        groupedData[priority] = [];

      }

 

      groupedData[priority].push(item);

    }

 

    return groupedData;

  }

 

 

 

}

 

export interface Root {

  tickets: Ticket[]

  users: User[]

}

 

export interface Ticket {

  id: string

  title: string

  tag: string[]

  userId: string

  status: string

  priority: number

}

 

export interface User {

  id: string

  name: string

  available: boolean

}

 
