import { useSession, signIn, signOut } from "next-auth/react"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import styles from '@/styles/Home.module.css'

const Login = () => {
  const { data: session} = useSession();
  const userProfileImg = session?.user?.image as string;

  if (session) {
    return <div className={`${styles.main} `}>
      <h4><u>Sign In User Details</u></h4>
      <h3>Name : {session?.user?.name} </h3>
      <p>E-mail : {session?.user?.email}</p>
      <Avatar alt={session?.user?.name as string} src={userProfileImg} />
      <Button variant="contained" color="error" onClick={() => signOut()}>Sign out</Button>
    </div>
  }

  return <div className={`${styles.main} `}>
    Not Signed in <br/>
    <Button variant="contained" color="success" onClick={() => signIn()}>Sign in</Button>
  </div>
}

export default Login