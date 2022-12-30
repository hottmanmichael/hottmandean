import { gql } from "@apollo/client";
import { CreateRSVPInput, InvitedPrimaryGuest } from "../../api/notion";

export type CreateRsvpResponse = {
  createRSVP: InvitedPrimaryGuest;
};

export type CreateRsvpRequest = {
  input: CreateRSVPInput;
};

export const CREATE_RSVP = gql`
  mutation CreateRSVP($input: CreateRSVPInput) {
    createRSVP(input: $input) {
      id
      fullName
      firstName
      lastName
      additions {
        fullName
        firstName
        isAttending
      }
      isAttending
    }
  }
`;
