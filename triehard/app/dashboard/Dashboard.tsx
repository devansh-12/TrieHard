"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import AppTheme from "../shared-theme/AppTheme";
import { CssBaseline, Box, Stack } from "@mui/material";
import AppNavbar from "./components/AppNavbar";
import Header from "./components/Header";
import MainGrid from "./components/MainGrid";
import SideMenu from "./components/SideMenu";

export default function Dashboard(props: { disableCustomTheme?: boolean }) {
  const router = useRouter();
  const auth = getAuth();
  
  // ✅ Define the user state with correct type: User | null
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/signIn"); // Redirect if not logged in
      } else {
        setUser(currentUser); // ✅ No more TypeScript error
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) return <p>Loading...</p>;

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: "flex" }}>
        <SideMenu />
        <AppNavbar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Stack spacing={2} sx={{ alignItems: "center", mx: 3, pb: 5 }}>
            <Header />
            <MainGrid />
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
}
