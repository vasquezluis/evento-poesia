/**
 * * users interface <contract>
 */

export interface Users {
  user: string;
  password: string;
  roles: [string];
  permissions: [string];
  active: boolean;
}
