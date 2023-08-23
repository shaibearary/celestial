export interface ProblemInfo {
    UID: string;
    Parent: string;
    Title: string;
    Body: string;
    Closed: boolean;
    ClaimedAt: number;
    ClaimedBy: string;
    CreatedBy: string;
    Rocket: string;
    Tags: Record<string, unknown>; // Update the type if you know the structure of Tags object
  }