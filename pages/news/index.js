import Link from "next/link";
const news = () => {
  return (
    <>
      news page is here
      <ul>
        <li>
          <Link href="/news/hello"> next js is grat framrwork</Link>
        </li>
        <li>Something else</li>
      </ul>
    </>
  );
};
export default news;
