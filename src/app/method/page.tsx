"use client";

import { useRouter } from "next/navigation";
import { useMethod } from "react-method-elements";

export default function Page() {
  const router = useRouter();

  const method = useMethod({
    env: "dev",
    onEvent: (payload) => {
      console.log("event", payload);
    },
    onSuccess: (payload) => {
      console.log("success", payload);
    }, // Invoked when auth has successfully completed.
    onError: (payload) => {
      console.log("error", payload);
    },
    onExit: (payload) => {
      console.log("exit", payload);
    },
    onOpen: (payload) => {
      console.log("open", payload);
    },
  });

  //   useEffect(() => {
  //     console.log("asdasd");
  //   }, []);

  const onClick = async () => {
    // console.log("hi");
    if (!method) return null;
    method.open("pk_elem_mzUKttBwqzXJga9jafTXnGYyqqR6G3W6");
  };

  return (
    <div>
      <button className="p-2 border-1" onClick={onClick}>
        Verify
      </button>
    </div>
  );
}
