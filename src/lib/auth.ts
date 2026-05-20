"use client";

const SESSION_KEY = "wbm_investor_session";
const SESSION_DURATION = 2 * 60 * 60 * 1000; // 2 hours in milliseconds

export interface Session {
  isLoggedIn: boolean;
  userEmail?: string;
  expiry: number;
}

// Mock valid credentials
const VALID_CREDENTIALS = {
  email: "investor@wastebeminerals.com",
  password: "WBM_Investor_2026",
  accessKey: "WBM2026"
};

export const authenticate = (email: string, password: string): { success: boolean; tempKey?: string } => {
  // Allow any valid email for demonstration/testing, but check the password
  if (password === VALID_CREDENTIALS.password) {
    return { success: true, tempKey: VALID_CREDENTIALS.accessKey };
  }
  return { success: false };
};

export const verifyAndLogin = (key: string, email: string): boolean => {
  if (key === VALID_CREDENTIALS.accessKey) {
    const expiry = Date.now() + SESSION_DURATION;
    const session: Session = { isLoggedIn: true, userEmail: email, expiry };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem(SESSION_KEY);
  if (typeof window !== "undefined") {
    window.location.href = "/WBM-Investor-Access-Requirements/investor/login";
  }
};

export const getSession = (): Session | null => {
  if (typeof window === "undefined") return null;
  
  const sessionStr = localStorage.getItem(SESSION_KEY);
  if (!sessionStr) return null;

  try {
    const session: Session = JSON.parse(sessionStr);
    if (Date.now() > session.expiry) {
      logout();
      return null;
    }
    return session;
  } catch (e) {
    return null;
  }
};

export const isAuthenticated = (): boolean => {
  return !!getSession();
};
