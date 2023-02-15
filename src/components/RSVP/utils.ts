import { InvitedPrimaryGuest } from "../../api/notion";


export function areSomeAttending(guest: InvitedPrimaryGuest) {
  const guests = [...guest.additions, guest];
  return guests.some((addition) => addition.isAttending);
}