// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styles from './Card.module.css';

export interface Person {
  address: string;
  name: string;
  email: string;
  phone: string;
}

const Card = ({ name, email, address, phone }: Person): JSX.Element => {
  return (
    <div className={styles.card}>
      <div>{name}</div>
      <div>{email}</div>
      <div>{address}</div>
      <div>{phone}</div>
    </div>
  );
};

export default Card;
