export interface Notification {
  title?: string;
  message: string;
  details?: string;
  type?: 'success' | 'error' | 'info';
}