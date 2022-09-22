import jwtDecode from 'jwt-decode';
import TransactionsDetailContent from '../../../components/organisms/TransactionsDetailContent';
import { getTransactionDetail } from '../../../services/member';
import {
  UserTypes,
  JWTPayloadTypes,
  HistoryTransactionTypes,
} from '../../../services/data-types';

interface TranscationsDetailProps {
  transactionDetail: HistoryTransactionTypes;
}
export default function TransactionsDetail(props: TranscationsDetailProps) {
  const { transactionDetail } = props;
  // console.log("detail", transactionDetail);

  return (
    <section className="transactions-detail overflow-auto">
      <TransactionsDetailContent data={transactionDetail} />
    </section>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
  params: {
    idTrx: string;
  };
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  // console.log("params:", params);
  const { idTrx } = params;
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(token, 'base64').toString('ascii');
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const userFromPayload: UserTypes = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMG;
  userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;
  const response = await getTransactionDetail(idTrx, jwtToken);
  // console.log("data", response);

  return {
    props: {
      transactionDetail: response.data,
    },
  };
}
