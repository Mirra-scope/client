import MainStack from "./navigation/Main.routes";
import { I18nextProvider } from "react-i18next";
import { i18n } from "./i18n";
import { ThemeProvider } from "./theme/Theme.context";
import { UserDetailProvider } from "./context/UserDetail.context";
import { AuthContextProvider } from "./context/AuthContext";
import { GraphQlErrorProvider } from "./context/GraphQlErrorContext";
import { LocalizationProvider, LicenseInfo as DatePickerLicenseInfo } from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers-pro/AdapterDateFns";
import { LicenseInfo as DataGridLicenseInfo } from "@mui/x-data-grid-pro";
import { ApolloProvider } from "@apollo/client";
import { queryClient } from "./api/queryClient";
import { SidebarContextProvider } from "./context/SidebarContext";
import { FirebaseProvider } from "./context/FirebaseContext";
import KeyboardShortcutsContext from "./context/KeyboardShortcutsContext";
import { BrowserRouter } from "react-router-dom";

DataGridLicenseInfo.setLicenseKey("76c34ab47f811b623345476a6f326e4aTz01NzA5OSxFPTE3MDQ0NzYyNjQyODMsUz1wcm8sTE09c3Vic2NyaXB0aW9uLEtWPTI=");
DatePickerLicenseInfo.setLicenseKey("76c34ab47f811b623345476a6f326e4aTz01NzA5OSxFPTE3MDQ0NzYyNjQyODMsUz1wcm8sTE09c3Vic2NyaXB0aW9uLEtWPTI=");
function App() {
  return (
    <ApolloProvider client={queryClient}>
      <FirebaseProvider>
        <BrowserRouter>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <I18nextProvider i18n={i18n}>
              <AuthContextProvider>
                <ThemeProvider>
                  <UserDetailProvider>
                    <GraphQlErrorProvider>
                      <SidebarContextProvider>
                        <KeyboardShortcutsContext>
                          <MainStack />
                        </KeyboardShortcutsContext>
                      </SidebarContextProvider>
                    </GraphQlErrorProvider>
                  </UserDetailProvider>
                </ThemeProvider>
              </AuthContextProvider>
            </I18nextProvider>
          </LocalizationProvider>
        </BrowserRouter>
      </FirebaseProvider>
    </ApolloProvider>
  );
}

export default App;
