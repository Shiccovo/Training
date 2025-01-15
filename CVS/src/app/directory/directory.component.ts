import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Employee } from '../models/employee.interface';

@Component({
  selector: 'app-directory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Smith',
      email: 'john.smith@company.com',
      avatar: 'https://i.pravatar.cc/150?img=1',//generate random avatar
      
    },
    {
      id: 2,
      firstName: 'Sarah',
      lastName: 'Johnson',
      email: 'sarah.j@company.com',
      avatar: 'https://i.pravatar.cc/150?img=2'
    },{
      id: 3,
      firstName: 'Sarah',
      lastName: 'Johnson',
      email: 'sarah.j@company.com',
      avatar: 'https://i.pravatar.cc/150?img=3'
    },{
      id: 4,
      firstName: 'Sarah',
      lastName: 'Johnson',
      email: 'sarah.j@company.com',
      avatar: 'https://i.pravatar.cc/150?img=5'
    },{
      id: 5,
      firstName: 'Sarah',
      lastName: 'Johnson',
      email: 'sarah.j@company.com',
      avatar: 'https://i.pravatar.cc/150?img=4'
    },

  ];

  ngOnInit(): void {}
}
