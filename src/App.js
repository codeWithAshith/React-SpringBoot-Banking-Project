import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home.page";
import LoginPage from "./pages/Login.page";
import RegisterAccountPage from "./pages/RegisterAccount.page";
import RegisterNetBanking from "./pages/RegisterNetBanking.page";
import ForgotPasswordPage from "./pages/ForgotPassword.page";
import SessionExpiredPage from "./pages/SessionExpired.page";
import ErrorPage from "./pages/Error.page";
import SharedNavBarComponent from "./components/layouts/SharedNavBar.component";
import AccountDetailsPage from "./pages/AccountDetails.page";
import AccountStatementPage from "./pages/AccountStatement.page";
import FundTransferPage from "./pages/FundTransfer.page";
import TransferSuccessPage from "./pages/TransferSuccess.page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registerAccount" element={<RegisterAccountPage />} />
        <Route path="/registerNetBanking" element={<RegisterNetBanking />} />
        <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
        <Route path="/expired" element={<SessionExpiredPage />} />
        <Route path="/" element={<SharedNavBarComponent />}>
          <Route index element={<HomePage />} />
          <Route path="accountDetails" element={<AccountDetailsPage />} />
          <Route path="accountStatement" element={<AccountStatementPage />} />
          <Route path="transfer" element={<FundTransferPage />} />
        </Route>
        <Route path="/success" element={<TransferSuccessPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
