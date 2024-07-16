import { useState } from "react";
import { Link } from "react-router-dom";
import { useRequestResetPassword } from "./useUserActions";
import { toast } from "react-toastify";
import { IoIosMail } from "react-icons/io";
import styles from "./RequestResetPassword.module.css";

const RequestResetPassword = () => {
  const [email, setEmail] = useState("");
  const requestResetPassword = useRequestResetPassword();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await requestResetPassword.mutateAsync({ email });
      toast.success(
        "If an account with that email exists, a reset link has been sent."
      );
    } catch (error) {
      toast.error("Failed to send reset link.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.requestContainer}>
        <h1 className={styles.header}>Request Password Reset</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>
              Email
              <div className={styles.icon}>
                <IoIosMail />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.inputField}
                required
              />
            </label>
          </div>
          <button type="submit" className={styles.button}>
            Send Reset Link
          </button>
        </form>
        <div className={styles.footer}>
          <Link to="/login" className={styles.link}>
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RequestResetPassword;
