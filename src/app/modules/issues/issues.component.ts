import { Component } from '@angular/core';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css'],
})
export class IssuesComponent {
  steps = [
    {
      id: 1,
      stepName: 'General',
      previousStep: null,
      lineColor: '#000000',
      sections: [
        {
          id: 1,
          stepName: 'Paso 1',
          previousStep: null,
          lineColor: '#FF0000',
          sections: [
            {
              id: 1,
              stepName: 'SubPaso 1',
              previousStep: null,
              lineColor: '#00FF00',
              sections: [
                {
                  id: 1,
                  stepName: 'SubSubPaso 1',
                  previousStep: null,
                  lineColor: '#0000FF',
                  sections: [],
                },
                {
                  id: 1,
                  stepName: 'SubSubPaso 2',
                  previousStep: null,
                  lineColor: '#0000FF',
                  sections: [],
                },
              ],
            },
            {
              id: 1,
              stepName: 'SubPaso 2',
              previousStep: null,
              lineColor: '#0000FF',
              sections: [
                {
                  id: 1,
                  stepName: 'SubSubPaso 3',
                  previousStep: null,
                  lineColor: '#0000FF',
                  sections: [],
                },
                {
                  id: 1,
                  stepName: 'SubSubPaso 4',
                  previousStep: null,
                  lineColor: '#0000FF',
                  sections: [],
                },
              ],
            },
            {
              id: 1,
              stepName: 'SubPaso 3',
              previousStep: null,
              lineColor: '#0000FF',
              sections: [],
            },
          ],
        },
        {
          id: 1,
          stepName: 'Paso 2',
          previousStep: null,
          lineColor: '#0000FF',
          sections: [],
        },
        {
          id: 1,
          stepName: 'Paso 3',
          previousStep: null,
          lineColor: '#0000FF',
          sections: [
            {
              id: 1,
              stepName: 'SubPaso 4',
              previousStep: null,
              lineColor: '#0000FF',
              sections: [],
            },
            {
              id: 1,
              stepName: 'SubPaso 5',
              previousStep: null,
              lineColor: '#0000FF',
              sections: [],
            },
          ],
        },
        {
          id: 1,
          stepName: 'Paso 4',
          previousStep: null,
          lineColor: '#0000FF',
          sections: [
            {
              id: 1,
              stepName: 'SubPaso 6',
              previousStep: null,
              lineColor: '#0000FF',
              sections: [],
            },
            {
              id: 1,
              stepName: 'SubPaso 7',
              previousStep: null,
              lineColor: '#0000FF',
              sections: [],
            },
            {
              id: 1,
              stepName: 'SubPaso 8',
              previousStep: null,
              lineColor: '#0000FF',
              sections: [],
            },
            {
              id: 1,
              stepName: 'Paso 5',
              previousStep: null,
              lineColor: '#0000FF',
              sections: [],
            },
          ],
        },
      ],
    },
  ];
}
