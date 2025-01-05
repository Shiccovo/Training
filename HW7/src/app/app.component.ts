import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HW7';
  selectedItemId: number | null = null;

  items: Item[] = [
    {
      id: 1,
      title: 'John Doe',
      content:
        'Dear John, I hope this letter finds you well. It has been a while since we last spoke, and I wanted to catch up with you. How have you been? I have been busy with work and family, but I always think about the good times we had together. Let’s plan to meet up soon. Best regards, Your Friend.',
      color: 'rgb(255, 0, 0)',
    },
    {
      id: 2,
      title: 'Jane Smith',
      content:
        'Hello Jane, I hope you are doing great. I wanted to write to you and share some exciting news. I recently got a promotion at work, and I am thrilled about it. How are things on your end? Let’s catch up over coffee sometime soon. Take care, Your Friend.',
      color: 'rgb(0, 128, 0)',
    },
    {
      id: 3,
      title: 'Michael Johnson',
      content:
        'Hi Michael, It’s been a long time since we last connected. I hope everything is going well with you. I have been thinking about our last conversation and wanted to follow up. Let’s find some time to chat and catch up. Looking forward to hearing from you. Best, Your Friend.',
      color: 'rgb(0, 0, 255)',
    },
    {
      id: 4,
      title: 'Emily Davis',
      content:
        'Dear Emily, I hope you are well. I wanted to reach out and see how you are doing. It has been a busy few months for me, but I always think about our wonderful times together. Let’s plan a get-together soon. Miss you, Your Friend.',
      color: 'rgb(255, 192, 203)',
    },
    {
      id: 5,
      title: 'David Wilson',
      content:
        'Hello David, I hope this message finds you in good health. I wanted to share some updates with you and see how you are doing. Life has been hectic, but I always cherish our friendship. Let’s catch up soon. Warm regards, Your Friend.',
      color: 'rgb(255, 165, 0)',
    },
  ];

  onSelectedItemIdChange(id: number | null) {
    this.selectedItemId = id;
    console.log("works");
  }

  get selectedItem(): Item | null {
    return this.items.find((item) => item.id === this.selectedItemId) || null;
  }
}

export interface Item {
  id: number;
  title: string;
  content: string;
  color: string;
}
