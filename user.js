<div class="container">

    <h1>ticket</h1>

    <div class="row">

        <button style="margin: 0.5rem 0rem" (click)="grpByUser(data?.tickets)">grp by user</button>

        <button style="margin: 0.5rem 0rem" (click)="grpByStatus(data?.tickets)">grp by status</button>

        <button style="margin: 0.5rem 0rem" (click)="grpByPriority(data?.tickets)">grp by priority</button>

 

        <div class="col-sm" *ngFor="let ticket of data?.tickets">

            <div class="card">

                <p>Ticket Id :- {{ticket.id}}</p>

                <p style="color: greenyellow;">{{ticket.priority}}</p>

                <p style="color: red;">{{ticket.status}}</p>

                <p style="color: darkblue;">{{ticket.tag}}</p>

                <p style="color: tomato;">{{ticket.title}}</p>

                <p style="color: teal;">{{ticket.userId}}</p>

            </div>

        </div>

    </div>

</div>

 

 

<hr>

 

<div class="container">

    <h1>users</h1>

    <div class="row">

        <div class="col-sm" *ngFor="let user of data?.users">

            <div class="card">

                <p>{{user.id}}</p>

                <p>{{user.name}}</p>

                <p>{{user.available}}</p>

            </div>

        </div>

    </div>

</div>
