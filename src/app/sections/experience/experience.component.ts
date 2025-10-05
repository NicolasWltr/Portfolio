import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { QualificationComponent } from "../../components/qualification/qualification.component";

@Component({
  selector: 'app-experience',
  imports: [
    CommonModule,
    QualificationComponent
],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  qualifications = [
    {
      name: "Working Student Softwaredevelopment",
      company: "Fürstlich Castell'sche Bank",
      start: "August 2023",
      end: "Februar 2025",
      tasks: [
        "Support in the development of in-house applications",
        "Support in data quality management"
      ],
      work: true
    },
    {
      name: 'University of Würzburg',
      degree: 'B.Sc. Computer Science',
      start: 'October 2022',
      end: 'September 2025',
      infos: [
        "Graduation: SS 2025",
        "Grade: 1,9"
      ],
      work: false
    },
    {
      name: "Internship",
      company: "SSH GmbH",
      start: "July 2019",
      end: null,
      tasks: [
        "Administration",
        "Development",
        "Support"
      ],
      work: true
    },
    {
      name: 'Egbert-Gymnasium-Münsterschwarzach',
      degree: 'Abitur',
      start: 'September 2014',
      end: 'June 2022',
      infos: [
        "Scientific and Technological Branch",
        "Grade: 2,1"
      ],
      work: false
    }
  ]

  education = [
    {
      name: 'University of Würzburg',
      degree: 'B.Sc. Computer Science',
      start: 'October 2022',
      end: 'Now',
      infos: [
        "Expected Graduation: SS 2025",
        "Preliminary Grade: 2,0"
      ]
    },
    {
      name: 'Egbert-Gymnasium-Münsterschwarzach',
      degree: 'Abitur',
      start: 'September 2014',
      end: 'June 2022',
      infos: [
        "Scientific and Technological Branch",
        "Grade: 2,1"
      ]
    }
  ]

  workExperience = [
    {
      "name": "Working Student Softwaredevelopment",
      "company": "Fürstlich Castell'sche Bank",
      "start": "August 2023",
      "end": "Februar 2025",
      "tasks": [
        "Support in the development of in-house applications",
        "Support in data quality management"
      ]
    },
    {
      "name": "Internship",
      "company": "SSH GmbH",
      "start": "July 2019",
      "end": null,
      "tasks": [
        "Administration",
        "Development",
        "Support"
      ]
    }
  ]
}
