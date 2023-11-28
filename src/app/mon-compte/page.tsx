'use client';

import {useEffect, useState} from "react";
import {getUser} from "../../utils/supabase";
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import { Session } from "@supabase/gotrue-js/src/lib/types"

export default function Page() {
  const [user, setUser] = useState<Session>();
  const supabase = createClientComponentClient();

  useEffect(() => {
    getUser(supabase).then((session) => {
      setUser(session)
    })
  }, []);

  return (
      <p>
        {user.session.user.user_metadata.name}
      </p>
  )
}