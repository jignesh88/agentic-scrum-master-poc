export interface Standup {
  id: string;
  user_id: string;
  date: string;
  yesterday_work: string;
  today_work: string;
  blockers?: string;
  ai_summary?: string;
  created_at: string;
}

export interface StandupFormData {
  user_id: string;
  yesterday_work: string;
  today_work: string;
  blockers?: string;
}

export interface StandupSummary {
  date: string;
  team_members: string[];
  summary: string;
  action_items: string[];
  blockers: string[];
  generated_at: string;
}
