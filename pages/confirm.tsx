import TokenAction from "../components/token-action";

// DRAFT COPY for Niel to review.
export default function Confirm() {
  return (
    <TokenAction
      title="Confirm your subscription"
      prompt="One tap and you're on the list for new posts."
      button="Confirm subscription"
      endpoint="/api/confirm"
      doneTitle="You're confirmed"
      doneText="Thanks. You'll get an email when I publish something new."
      path="/confirm"
    />
  );
}
