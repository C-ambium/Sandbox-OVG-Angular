export interface Event {
  id: number;
  label: string;
  author: string;
  description: string;
  finished: boolean;
}

export interface EventFormDTO {
  id: number;
  label: string;
  author: string;
  description: string;
  enabled: boolean;
}
