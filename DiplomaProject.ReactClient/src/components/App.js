import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.scss";
import { getCertificate, sendTransaction } from "./near/NearConnect";
import { Home } from "./Home";
import { CertificateForm } from "./CertificateForm";
import { CertificatesLibrary } from "./CertificatesLibrary";
import Header from "./Header";
import Login from "./Login";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import ControlledWizard from "./ControlledWizard";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div>
            <Header />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/library" element={<CertificatesLibrary />} />
              <Route path="/login" element={<Login />}></Route>
              <Route path="/certificate/:id" element={<CertificateForm />} />
            </Routes>
          </div>
        </Router>
      </QueryClientProvider>
    </>
  );
};

export default App;
