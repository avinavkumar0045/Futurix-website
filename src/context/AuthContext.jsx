// import { createContext, useContext, useEffect, useState } from "react";
// import { supabase } from "../lib/supabase";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // 1️⃣ Get existing session on refresh
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       if (session?.user) {
//         setUser(session.user);
//         fetchProfile(session.user.id);
//       } else {
//         setLoading(false);
//       }
//     });

//     // 2️⃣ Listen to auth state changes
//     const { data: authListener } = supabase.auth.onAuthStateChange(
//       async (_event, session) => {
//         if (session?.user) {
//           setUser(session.user);
//           await fetchProfile(session.user.id);
//         } else {
//           setUser(null);
//           setProfile(null);
//           setLoading(false);
//         }
//       }
//     );

//     return () => {
//       authListener.subscription.unsubscribe();
//     };
//   }, []);

//   // 3️⃣ Fetch profile (CRITICAL FIX IS HERE)
//   async function fetchProfile(userId) {
//     setLoading(true);

//     const { data, error } = await supabase
//       .from("profiles")
//       .select("*")
//       .eq("id", userId)
//       .single(); // ✅ THIS FIXES ADMIN ISSUE

//     if (error) {
//       console.error("❌ Profile fetch error:", error);
//       setProfile(null);
//     } else {
//       setProfile(data);
//       console.log("✅ Profile loaded:", data);
//     }

//     setLoading(false);
//   }

//   const value = {
//     user,
//     profile,
//     loading,
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get current session on refresh
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser(session.user);
        fetchProfile(session.user.id);
      } else {
        setLoading(false);
      }
    });

    // Listen to auth changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) {
          setUser(session.user);
          fetchProfile(session.user.id);
        } else {
          setUser(null);
          setProfile(null);
          setLoading(false);
        }
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  async function fetchProfile(userId) {
    setLoading(true);

    const { data, error } = await supabase
      .from("profiles")
      .select("id, email, role")
      .eq("id", userId)
      .single();

    if (error) {
      console.error("Profile fetch failed:", error);
      setProfile(null);
    } else {
      setProfile(data);
    }

    setLoading(false);
  }

  return (
    <AuthContext.Provider value={{ user, profile, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
