import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  printData = function () {
    console.log(this.blockConfiguration);
  };
  ngOnInit() {
    
  }
  blockConfiguration = [
    {
      'name': 'Submission Flow',
      'data': [
        {
          'name': 'submission_sub',
          'title': 'Submission',
          'columnItems': [
            { 'name': 'View', 'checked': false },
            { 'name': 'Edit', 'checked': true },
            { 'name': 'Submit', 'type': 'half', 'checked': true },
            { 'name': 'Reset', 'checked': false },
            { 'name': 'Assign', 'checked': true }
          ]
        },
        {
          'name': 'submission_assign',
          'title': 'Assign Priority',
          'columnItems': [
            { 'name': 'View', 'checked': false },
            { 'name': 'Edit', 'checked': true },
            { 'name': 'Submit', 'type': 'half', 'checked': true },
            { 'name': 'Reset', 'checked': false },
            { 'name': 'Assign', 'checked': true }
          ]
        },
        {
          'name': 'submission_qa',
          'title': 'QA Status',
          'columnItems': [
            { 'name': 'View', 'checked': false },
            { 'name': 'Edit', 'checked': true },
            { 'name': 'Submit', 'type': 'half', 'checked': true },
            { 'name': 'Reset', 'checked': false },
            { 'name': 'Assign', 'checked': true }
          ]
        },
        {
          'name': 'submission_nmi',
          'title': 'NMI',
          'columnItems': [
            { 'name': 'View', 'checked': false },
            { 'name': 'Edit', 'checked': true },
            { 'name': 'Submit', 'type': 'half', 'checked': true },
            { 'name': 'Reset', 'checked': false },
            { 'name': 'Assign', 'checked': true }
          ]
        },
        {
          'name': 'submission_pm',
          'title': 'PM Review Status',
          'columnItems': [
            { 'name': 'View', 'checked': false },
            { 'name': 'Edit', 'checked': true },
            { 'name': 'Submit', 'type': 'half', 'checked': true },
            { 'name': 'Reset', 'checked': false },
            { 'name': 'Assign', 'checked': true }
          ]
        }
      ]
    },
    {
      'name': 'Incident Flow',
      'data': [
        {
          'name': 'incident',
          'title': 'Incident',
          'columnItems': [
            { 'name': 'View', 'checked': false },
            { 'name': 'Edit', 'checked': true },
            { 'name': 'Submit', 'type': 'half', 'checked': true },
            { 'name': 'Reset', 'checked': false },
            { 'name': 'Assign', 'checked': true }
          ]
        },
        {
          'name': 'inci_assign',
          'title': 'Assign Priority',
          'columnItems': [
            { 'name': 'View', 'checked': false },
            { 'name': 'Edit', 'checked': true },
            { 'name': 'Submit', 'type': 'half', 'checked': true },
            { 'name': 'Reset', 'checked': false },
            { 'name': 'Assign', 'checked': true }
          ]
        },
        {
          'name': 'inci_urgent_task',
          'title': 'Urgent Task',
          'columnItems': [
            { 'name': 'View', 'checked': false },
            { 'name': 'Edit', 'checked': true },
            { 'name': 'Submit', 'type': 'half', 'checked': true },
            { 'name': 'Reset', 'checked': false },
            { 'name': 'Assign', 'checked': true }
          ]
        },
        {
          'name': 'inci_qa',
          'title': 'QA Status',
          'columnItems': [
            { 'name': 'View', 'checked': false },
            { 'name': 'Edit', 'checked': true },
            { 'name': 'Submit', 'type': 'half', 'checked': true },
            { 'name': 'Reset', 'checked': false },
            { 'name': 'Assign', 'checked': true }
          ]
        },
        {
          'name': 'inci_nmi',
          'title': 'NMI',
          'columnItems': [
            { 'name': 'View', 'checked': false },
            { 'name': 'Edit', 'checked': true },
            { 'name': 'Submit', 'type': 'half', 'checked': true },
            { 'name': 'Reset', 'checked': false },
            { 'name': 'Assign', 'checked': true }
          ]
        },
        {
          'name': 'inci_pm',
          'title': 'PM Review Status',
          'columnItems': [
            { 'name': 'View', 'checked': false },
            { 'name': 'Edit', 'checked': true },
            { 'name': 'Submit', 'type': 'half', 'checked': true },
            { 'name': 'Reset', 'checked': false },
            { 'name': 'Assign', 'checked': true }
          ]
        }
      ]
    },
    {
      'name': 'Post Lunch Flow',
      'data': [
        {
          'name': 'pl_assign',
          'title': 'Assign Priority',
          'columnItems': [
            { 'name': 'View', 'checked': false },
            { 'name': 'Edit', 'checked': true },
            { 'name': 'Submit', 'type': 'half', 'checked': true },
            { 'name': 'Reset', 'checked': false },
            { 'name': 'Assign', 'checked': true }
          ]
        },
        {
          'name': 'pl_qa',
          'title': 'QA Status',
          'columnItems': [
            { 'name': 'View', 'checked': false },
            { 'name': 'Edit', 'checked': true },
            { 'name': 'Submit', 'type': 'half', 'checked': true },
            { 'name': 'Reset', 'checked': false },
            { 'name': 'Assign', 'checked': true }
          ]
        },
        {
          'name': 'manager_validation',
          'title': 'Manager Validation',
          'columnItems': [
            { 'name': 'View', 'checked': false },
            { 'name': 'Edit', 'checked': true },
            { 'name': 'Submit', 'type': 'half', 'checked': true },
            { 'name': 'Reset', 'checked': false },
            { 'name': 'Assign', 'checked': true }
          ]
        },
        {
          'name': 'add_post_launch_review',
          'title': 'Additional Post Launch Review',
          'columnItems': [
            { 'name': 'View', 'checked': false },
            { 'name': 'Edit', 'checked': true },
            { 'name': 'Submit', 'type': 'half', 'checked': true },
            { 'name': 'Reset', 'checked': false },
            { 'name': 'Assign', 'checked': true }
          ]
        }
      ]
    }
  ];
}
