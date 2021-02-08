// [WARNING] This file is generated by running `$ qore codegen` on your root project, please do not edit

/// <reference types="@feedloop/qore-client" />
import { QoreSchema } from "@feedloop/qore-client";

declare module "@feedloop/qore-client" {
  type MemberTableRow = {
    id: string;
    email: string;
    role: { id: string; displayField: string };
  };

  type AllMemberViewRow = {
    read: {
      id: string;
      email: string;
      role: { id: string; displayField: string };
    };
    write: {
      email: string;
    };
    params: {};
    actions: {};
    forms: {};
  };

  type ProjectSchema = {
    allMember: AllMemberViewRow;
  };
}
