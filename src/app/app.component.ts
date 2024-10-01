import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

interface FAQ {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  faqs: FAQ[] = [
    {
      question: 'What is Frontend Mentor, and how will it help me?',
      answer: 'Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It\'s suitable for all levels and ideal for portfolio building.',
      open: false
    },
    {
      question: 'Is Frontend Mentor free?',
      answer: 'Yes, Frontend Mentor offers both free and premium plans depending on the challenge complexity.',
      open: false
    },
    {
      question: 'Can I use Frontend Mentor projects in my portfolio?',
      answer: 'Yes, you can use your completed challenges in your portfolio to show your skills.',
      open: false
    },
    {
      question: 'How can I get help if I\'m stuck on a challenge?',
      answer: 'You can get help from the community in the discussion boards or by looking at solutions from other developers.',
      open: false
    }
  ];

  toggleFAQ(faq: FAQ): void {
    faq.open = !faq.open;
  }
}
