import { Suspense } from "react";
import OAuthSuccessClient from "./OAuthSuccessClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OAuthSuccessClient />
    </Suspense>
  );
}