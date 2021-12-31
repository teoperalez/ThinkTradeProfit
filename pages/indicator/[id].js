import { useRouter } from "next/router";
import Image from "next/image";

const Indicator = ({ indi }) => {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.back()}>Back</button>
      
      <h1>{JSON.stringify(indi.title, null, 1)} | ${JSON.stringify(indi.price, null, 1)} </h1>
      <h3>{JSON.stringify(indi.description, null, 1)}</h3>
      <p>{JSON.stringify(indi.tags, null, 1)}</p>
      <p>{JSON.stringify(indi.body, null, 1)}</p>
      <h3>Backtest Results {JSON.stringify(indi.backtestdates, null, 1)}:</h3>
      <p>{JSON.stringify(indi.backtests, null, 1)}</p>

    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  const indi = await fetch(`http://localhost:3000/api/indicator/${id}`);
  const data = await indi.json();

  if (!data) {
    return {
      notFound: true
    };
  }

  return {
    props: { indi: data }
  };
}

export default Indicator;