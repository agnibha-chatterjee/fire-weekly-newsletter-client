"use client";

import { usePlaidLink } from "react-plaid-link";

export default function Page() {
  const { open, ready } = usePlaidLink({
    token: "link-sandbox-d7de22f7-0a52-4205-850e-5d3432f59ae8",
    onSuccess: (public_token, metadata) => {
      console.log("TOKEN", public_token);
      console.log("METADATA", metadata);
    },
  });

  return (
    <button onClick={() => open()} className="p-2 text-white bg-black">
      Plaid
    </button>
  );
}

// public-sandbox-3c911231-c9ed-47b9-9111-ef7d0f36dbca
// access - access-sandbox-49b674a0-ac44-4d30-a21f-2e13cb6fa712
