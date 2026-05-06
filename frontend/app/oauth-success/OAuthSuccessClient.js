"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function OAuthSuccessClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("accessToken");
    const role = searchParams.get("role");

    console.log("TOKEN:", token);
    console.log("ROLE:", role);

    if (!token || !role) {
      router.push("/login");
      return;
    }

    // Save token
    localStorage.setItem("accessToken", token);

    // Role-based redirect
    switch (role) {
      case "student":
        router.push("/dashboard/user");
        break;

      case "admin":
        router.push("/dashboard/admin");
        break;

      case "instructor":
        router.push("/dashboard/instructor");
        break;

      case "super_admin":
        router.push("/dashboard/superadmin");
        break;

      default:
        router.push("/login");
    }
  }, [router, searchParams]);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Logging you in... 🚀</h2>
    </div>
  );
}