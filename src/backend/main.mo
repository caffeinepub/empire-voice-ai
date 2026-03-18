import Text "mo:core/Text";
import List "mo:core/List";
import Array "mo:core/Array";
import Iter "mo:core/Iter";

actor {
  let submissionList = List.empty<Submission>();

  type Submission = {
    name : Text;
    email : Text;
    phone : Text;
    businessType : Text;
    message : Text;
  };

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : Text, businessType : Text, message : Text) : async () {
    let submission : Submission = {
      name;
      email;
      phone;
      businessType;
      message;
    };
    submissionList.add(submission);
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    submissionList.values().toArray();
  };
};
