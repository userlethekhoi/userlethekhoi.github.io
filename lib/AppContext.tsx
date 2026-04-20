"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Locale, LocaleStrings, locales } from "@/lib/locales";
import { defaultProfile, ProfileData } from "@/lib/profileData";

interface AppContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: LocaleStrings;
  profile: ProfileData;
  updateProfile: (data: Partial<ProfileData>) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

const STORAGE_KEY_PROFILE = "profile_data";
const STORAGE_KEY_LOCALE = "profile_locale";

function loadFromStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function saveToStorage<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* ignore */
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [profile, setProfile] = useState<ProfileData>(defaultProfile);

  useEffect(() => {
    const savedLocale = loadFromStorage<Locale>(STORAGE_KEY_LOCALE, "en");
    const savedProfile = loadFromStorage<ProfileData>(STORAGE_KEY_PROFILE, defaultProfile);
    setLocaleState(savedLocale);
    setProfile(savedProfile);
  }, []);

  function setLocale(l: Locale) {
    setLocaleState(l);
    saveToStorage(STORAGE_KEY_LOCALE, l);
  }

  function updateProfile(data: Partial<ProfileData>) {
    const updated = { ...profile, ...data };
    setProfile(updated);
    saveToStorage(STORAGE_KEY_PROFILE, updated);
  }

  const t = locales[locale];

  return (
    <AppContext.Provider value={{ locale, setLocale, t, profile, updateProfile }}>
      {children}
    </AppContext.Provider>
  );;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}
