import { InvitedPrimaryGuest } from "../../api/notion";

export interface FormValues {
  guestId: string | null;
  guest: InvitedPrimaryGuest | null;
}
