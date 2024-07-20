# Integrating Supabase User Management Module into a React Native application

(Tutorial Link - Supabase Documentation)[https://supabase.com/docs/guides/getting-started/tutorials/with-expo-react-native]

## Concepts:
- Authentication and User Management (SignUp and SignIn)
- Bucket Storages (Avatar profile pictures)

# Dependencies:
- ``asd`` 
- 
- 


-------------------------------------------------------------------------------

# Configuration:

## On Supabase Project:

A ``profiles`` table to 

Additionally the email confirmation check is disabled to just enter any email during the development testing.

## On the Applicatioin:

The file ``lib/supabase.ts`` creates a connection to the Supabase project.


<detaiils>
<summary>Expand</summary>

</details>


-------------------------------------------------------------------------------

# Components:
- Account.tsx
- Auth.tsx
<detaiils>
<summary>Expand</summary>

</details>
- Avatar.tsx

-------------------------------------------------------------------------------

# UserInterface Flow:

Lands on the index ``App.tsx`` has an useEffect to initialize and constantly observe on the Supabase Auth.Session.
If a ``session`` and ``session.user`` exists it displays the logged user account panel ``Account.tsx``. Where it can update its details and upload a 
Otherwise only the   

-------------------------------------------------------------------------------
