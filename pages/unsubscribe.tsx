import TokenAction from "../components/token-action";

// DRAFT COPY for Niel to review.
export default function Unsubscribe() {
  return (
    <TokenAction
      title="Unsubscribe"
      prompt="Tap below and you won't get any more emails from me."
      button="Unsubscribe"
      endpoint="/api/unsubscribe"
      doneTitle="You're unsubscribed"
      doneText="No more emails. Thanks for reading."
      path="/unsubscribe"
    />
  );
}
