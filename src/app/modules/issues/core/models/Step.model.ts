export interface Step {
  id: number;
  stepName: string;
  previousStep: number | null;
  sections: Step[];
  lineColor: string,
}