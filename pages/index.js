import "@arco-design/web-react/dist/css/arco.css";
import { Typography } from '@arco-design/web-react';
import styles from '../styles/Home.module.css'
const { Paragraph } = Typography;


const Home = () => {
  return (
    <div className={styles.home}>
      <Typography>
        <Typography.Title>Dream It, Build It</Typography.Title>
        <Paragraph>
          A design is a plan or specification for the construction of an object or system or for the
          implementation of an activity or process, or the result of that plan or specification in the
          form of a prototype, product or process. The verb to design expresses the process of
          developing a design. In some cases, the direct construction of an object without an explicit
          prior plan (such as in craftwork, some engineering, coding, and graphic design) may also be
          considered to be a design activity.
        </Paragraph>
      </Typography>
    </div>
  );
};

export default Home;
