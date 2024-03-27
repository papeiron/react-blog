import supabase from './supabase';

type LoginArg = {
  email: 'string';
  password: 'string';
};

export async function login({ email, password }: LoginArg) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  let { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

type updateUserArgs = {
  username: string;
  password: string;
};

export async function updateUser({ username, password }: updateUserArgs) {
  const { data, error } = await supabase.auth.updateUser({
    password: password,
    data: { username }
  });

  if (error) throw new Error(error.message);

  return data;
}
