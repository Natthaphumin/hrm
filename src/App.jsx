import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppLayout from "./ui/AppLayout";

import Dashboard from "./pages/users/Dashboard";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Admin from "./pages/admin/Admin";
import ProtectedRoute from "./utils/ProtectedRoute";
import GlobalStyle from "./styles/GlobalStyle";
import Learning from "./pages/Learning";
import Evaluation from "./pages/Evaluation";
import Exchange from "./pages/Exchange";
import Phq9 from "./pages/Phq9";
import Settings from "./pages/Settings";
import Documents from "./pages/Documents";
import Attendance from "./pages/Attendance";
import Organization from "./pages/Organization";

//Set up React query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />

            {/* Dashboard เข้าด้วย user/mod/admin */}
            <Route
              path="dashboard"
              element={
                <ProtectedRoute allowedRoles={["user", "mod", "admin"]}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="learning"
              element={
                <ProtectedRoute allowedRoles={["user", "mod", "admin"]}>
                  <Learning />
                </ProtectedRoute>
              }
            />
            <Route
              path="ld-evaluation"
              element={
                <ProtectedRoute allowedRoles={["user", "mod", "admin"]}>
                  <Evaluation />
                </ProtectedRoute>
              }
            />
            <Route
              path="exchange"
              element={
                <ProtectedRoute allowedRoles={["user", "mod", "admin"]}>
                  <Exchange />
                </ProtectedRoute>
              }
            />
            <Route
              path="phq9"
              element={
                <ProtectedRoute allowedRoles={["user", "mod", "admin"]}>
                  <Phq9 />
                </ProtectedRoute>
              }
            />
            <Route
              path="attendance"
              element={
                <ProtectedRoute allowedRoles={["user", "mod", "admin"]}>
                  <Attendance />
                </ProtectedRoute>
              }
            />
            <Route
              path="organization"
              element={
                <ProtectedRoute allowedRoles={["user", "mod", "admin"]}>
                  <Organization />
                </ProtectedRoute>
              }
            />
            <Route
              path="settings"
              element={
                <ProtectedRoute allowedRoles={["user", "mod", "admin"]}>
                  <Settings />
                </ProtectedRoute>
              }
            />
            <Route
              path="documents"
              element={
                <ProtectedRoute allowedRoles={["user", "mod", "admin"]}>
                  <Documents />
                </ProtectedRoute>
              }
            />

            {/* Admin เท่านั้น */}
            <Route
              path="admin"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <Admin />
                </ProtectedRoute>
              }
            />
          </Route>

          {/* Public routes */}
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
          <Route path="*" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
